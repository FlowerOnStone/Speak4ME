from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, HistorySerializer, \
    PopularTopicSerializer, PopularSentenceSerializer, TopicSerializer, SentenceSerializer
from .models import History, PopularTopic, PopularSentence, Topic, Sentence
from django.contrib.auth import login
from rest_framework import permissions
from rest_framework import status
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1],
        })


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


class ListCreateHistoryView(generics.ListCreateAPIView):
    model = History
    serializer_class = HistorySerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return History.objects.all().filter(owner=self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = HistorySerializer(data=request.data, context={"owner": self.request.user})
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Create a new Sentence in History successful!'
            }, status=status.HTTP_201_CREATED)

        return JsonResponse({
            'message': 'Create a new Sentence in History unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)


class DeleteHistoryView(generics.DestroyAPIView):
    model = History
    serializer_class = HistorySerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def delete(self, request, *args, **kwargs):
        sentence = get_object_or_404(History, id=kwargs.get('pk'))
        if sentence.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to  delete this sentence'
            }, status=status.HTTP_400_BAD_REQUEST)

        sentence.delete()
        return JsonResponse({
            'message': 'Delete history sentence successful!'
        }, status=status.HTTP_200_OK)


class ListCreatePopularTopicView(generics.ListCreateAPIView):
    models = PopularTopic
    serializer_class = PopularTopicSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return PopularTopic.objects.all().filter(owner=self.request.user)

    def create(self, request, *args, **kwargs):
        if not self.request.user:
            return JsonResponse({
                'message': "You don't have permission to create Popular topic because you are Anonymous User"
            }, status=status.HTTP_400_BAD_REQUEST)
        serializer = PopularTopicSerializer(data=request.data, context={"owner": self.request.user})
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Create a new Popular Topic successful!'
            }, status=status.HTTP_201_CREATED)

        return JsonResponse({
            'message': 'Create a new Popular Topic unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)


class UpdateDeletePopularTopicView(generics.RetrieveUpdateDestroyAPIView):
    models = PopularTopic
    serializer_class = PopularTopicSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def put(self, request, *args, **kwargs):
        popular_topic = get_object_or_404(PopularTopic, id=kwargs.get('pk'))
        if popular_topic.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to update this popular topic'
            }, status=status.HTTP_400_BAD_REQUEST)

        serializer = PopularTopicSerializer(popular_topic, data=request.data, context={"owner": self.request.user})
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Update Popular topic successful!'
            }, status=status.HTTP_200_OK)

        return JsonResponse({
            'message': 'Update Popular topic unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        popular_topic = get_object_or_404(PopularTopic, id=kwargs.get('pk'))
        if popular_topic.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to delete this popular topic'
            }, status=status.HTTP_400_BAD_REQUEST)
        position = popular_topic.position
        popular_topics = PopularTopic.objects.all().filter(owner=self.request.user)
        for topic in popular_topics:
            if topic.position > position:
                topic.position = topic.position - 1
                topic.save()
        popular_topic.delete()
        return JsonResponse({
            'message': 'Delete popular topic successful!'
        }, status=status.HTTP_200_OK)


class ListCreatePopularSentenceView(generics.ListCreateAPIView):
    models = PopularSentence
    serializer_class = PopularSentenceSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        topic = get_object_or_404(PopularTopic, id=self.request.data["topic"])
        if topic.owner != self.request.user:
            return JsonResponse({
                'message': "You don't have permission to view this popular topic"
            })
        return PopularSentence.objects.all().filter(topic=topic)

    def create(self, request, *args, **kwargs):
        if not self.request.user:
            return JsonResponse({
                'message': "You don't have permission to create Popular topic because you are Anonymous User"
            }, status=status.HTTP_400_BAD_REQUEST)
        topic = PopularTopic.objects.get(id=request.data['topic'])
        if topic is None:
            return JsonResponse({
                'message': "Topic does not exists"
            }, status=status.HTTP_400_BAD_REQUEST)
        if topic.owner != self.request.user:
            return JsonResponse({
                'message': "You don't have permission to create sentence in this topic"
            }, status=status.HTTP_400_BAD_REQUEST)
        serializer = PopularSentenceSerializer(data=request.data, context={
            "topic": topic,
            "owner": self.request.user
        })
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Create a new Popular Sentence successful!'
            }, status=status.HTTP_201_CREATED)

        return JsonResponse({
            'message': 'Create a new Popular Sentence unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)


class UpdateDeletePopularSentenceView(generics.RetrieveUpdateDestroyAPIView):
    models = PopularSentence
    serializer_class = PopularSentenceSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def put(self, request, *args, **kwargs):
        popular_sentence = get_object_or_404(PopularSentence, id=kwargs.get('pk'))
        if popular_sentence.topic.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to update this popular sentence'
            }, status=status.HTTP_400_BAD_REQUEST)

        serializer = PopularSentenceSerializer(popular_sentence, data=request.data, context={
            "owner": self.request.user
        })
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Update Popular sentence successful!'
            }, status=status.HTTP_200_OK)

        return JsonResponse({
            'message': 'Update Popular sentence unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        popular_sentence = get_object_or_404(PopularSentence, id=kwargs.get('pk'))
        if popular_sentence.topic.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to delete this popular sentence'
            }, status=status.HTTP_400_BAD_REQUEST)
        position = popular_sentence.position
        popular_sentences = PopularSentence.objects.all().filter(topic=popular_sentence.topic)
        for sentence in popular_sentences:
            if sentence.position > position:
                sentence.position = sentence.position - 1
                sentence.save()
        popular_sentence.delete()
        return JsonResponse({
            'message': 'Delete popular sentence successful!'
        }, status=status.HTTP_200_OK)


class ListCreateTopicView(generics.ListCreateAPIView):
    models = Topic
    serializer_class = TopicSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return Topic.objects.all().filter(owner=self.request.user)

    def create(self, request, *args, **kwargs):
        if not self.request.user:
            return JsonResponse({
                'message': "You don't have permission to create Popular topic because you are Anonymous User"
            }, status=status.HTTP_400_BAD_REQUEST)
        serializer = TopicSerializer(data=request.data, context={"owner": self.request.user})
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Create a new Topic successful!'
            }, status=status.HTTP_201_CREATED)

        return JsonResponse({
            'message': 'Create a new Topic unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)


class UpdateDeleteTopicView(generics.RetrieveUpdateDestroyAPIView):
    models = Topic
    serializer_class = TopicSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def put(self, request, *args, **kwargs):
        topic = get_object_or_404(Topic, id=kwargs.get('pk'))
        if topic.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to update this topic'
            }, status=status.HTTP_400_BAD_REQUEST)

        serializer = TopicSerializer(topic, data=request.data, context={"owner": self.request.user})
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Update topic successful!'
            }, status=status.HTTP_200_OK)

        return JsonResponse({
            'message': 'Update topic unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        topic = get_object_or_404(Topic, id=kwargs.get('pk'))
        if topic.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to delete this popular topic'
            }, status=status.HTTP_400_BAD_REQUEST)
        position = topic.position
        topics = Topic.objects.all().filter(owner=self.request.user)
        for topic in topics:
            if topic.position > position:
                topic.position = topic.position - 1
                topic.save()
        topic.delete()
        return JsonResponse({
            'message': 'Delete topic successful!'
        }, status=status.HTTP_200_OK)


class ListCreateSentenceView(generics.ListCreateAPIView):
    models = Sentence
    serializer_class = SentenceSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        topic = get_object_or_404(Topic, id=self.request.data["topic"])
        if topic.owner != self.request.user:
            return JsonResponse({
                'message': "You don't have permission to view this topic"
            })
        return Sentence.objects.all().filter(topic=topic)

    def create(self, request, *args, **kwargs):
        if not self.request.user:
            return JsonResponse({
                'message': "You don't have permission to create topic because you are Anonymous User"
            }, status=status.HTTP_400_BAD_REQUEST)
        topic = Topic.objects.get(id=request.data['topic'])
        if topic is None:
            return JsonResponse({
                'message': "Topic does not exists"
            }, status=status.HTTP_400_BAD_REQUEST)
        if topic.owner != self.request.user:
            return JsonResponse({
                'message': "You don't have permission to create sentence in this topic"
            }, status=status.HTTP_400_BAD_REQUEST)
        serializer = SentenceSerializer(data=request.data, context={
            "topic": topic,
            "owner": self.request.user
        })
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Create a new sentence successful!'
            }, status=status.HTTP_201_CREATED)

        return JsonResponse({
            'message': 'Create a new sentence unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)


class UpdateDeleteSentenceView(generics.RetrieveUpdateDestroyAPIView):
    models = Sentence
    serializer_class = SentenceSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def put(self, request, *args, **kwargs):
        sentence = get_object_or_404(Sentence, id=kwargs.get('pk'))
        if sentence.topic.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to update this sentence'
            }, status=status.HTTP_400_BAD_REQUEST)

        serializer = SentenceSerializer(sentence, data=request.data, context={
            "owner": self.request.user
        })
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                'message': 'Update sentence successful!'
            }, status=status.HTTP_200_OK)

        return JsonResponse({
            'message': 'Update sentence unsuccessful!'
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        sentence = get_object_or_404(Sentence, id=kwargs.get('pk'))
        if sentence.topic.owner != self.request.user:
            return JsonResponse({
                'message': 'You don\'t have permission to delete this sentence'
            }, status=status.HTTP_400_BAD_REQUEST)
        position = sentence.position
        sentences = Sentence.objects.all().filter(topic=sentence.topic)
        for sentence_ in sentences:
            if sentence_.position > position:
                sentence_.position = sentence_.position - 1
                sentence_.save()
        sentence.delete()
        return JsonResponse({
            'message': 'Delete popular sentence successful!'
        }, status=status.HTTP_200_OK)
