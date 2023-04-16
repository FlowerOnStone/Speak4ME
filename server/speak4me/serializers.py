from rest_framework import serializers
from django.contrib.auth.models import User
from .models import History, PopularTopic, PopularSentence, Topic, Sentence


# User Serializer 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        user.first_name = validated_data['first_name']
        user.save()
        return user


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ('id', 'content')
    
    def create(self, validated_data):
        sentence = History(owner=self.context['owner'], content=validated_data['content'])
        sentence.save()
        return sentence


class PopularTopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularTopic
        fields = ('id', 'name', 'description', 'position')

    def create(self, validated_data):
        owner_topics = PopularTopic.objects.all().filter(owner=self.context['owner'])
        position = 0
        for topic in owner_topics:
            position = max(position, topic.position)
        topic = PopularTopic(owner=self.context['owner'], name=validated_data['name'],
                             description=validated_data['description'], position=position+1)
        topic.save()
        return topic

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        if instance.position != validated_data.get('position'):
            new_position = validated_data.get('position')
            popular_topics = PopularTopic.objects.all().filter(owner=self.context['owner'])
            if new_position < instance.position:
                for topic in popular_topics:
                    if new_position <= topic.position < instance.position:
                        topic.position = topic.position + 1
                        topic.save()
            else:
                for topic in popular_topics:
                    if instance.position < topic.position <= new_position:
                        topic.position = topic.position - 1
                        topic.save()
            instance.position = new_position
        instance.save()
        return instance


class PopularSentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularSentence
        fields = ('id', 'content', 'position')

    def create(self, validated_data):
        topic = self.context['topic']
        sentences_of_topic = PopularSentence.objects.all().filter(topic=topic)
        position = 0
        for sentence in sentences_of_topic:
            position = max(position, sentence.position)
        sentence = PopularSentence(topic=topic, content=validated_data['content'], position=position+1)
        sentence.save()
        return sentence

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content')
        if instance.position != validated_data.get('position'):
            new_position = validated_data.get('position')
            popular_sentences = PopularSentence.objects.all().filter(topic=instance.topic)
            if new_position < instance.position:
                for sentence in popular_sentences:
                    if new_position <= sentence.position < instance.position:
                        sentence.position = sentence.position + 1
                        sentence.save()
            else:
                for sentence in popular_sentences:
                    if instance.position < sentence.position <= new_position:
                        sentence.position = sentence.position - 1
                        sentence.save()
            instance.position = new_position
        instance.save()
        return instance

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ('id', 'name', 'description', 'position')

    def create(self, validated_data):
        owner_topics = Topic.objects.all().filter(owner=self.context['owner'])
        position = 0
        for topic in owner_topics:
            position = max(position, topic.position)
        topic = Topic(owner=self.context['owner'], name=validated_data['name'],
                             description=validated_data['description'], position=position+1)
        topic.save()
        return topic

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        if instance.position != validated_data.get('position'):
            new_position = validated_data.get('position')
            topics = Topic.objects.all().filter(owner=self.context['owner'])
            if new_position < instance.position:
                for topic in topics:
                    if new_position <= topic.position < instance.position:
                        topic.position = topic.position + 1
                        topic.save()
            else:
                for topic in topics:
                    if instance.position < topic.position <= new_position:
                        topic.position = topic.position - 1
                        topic.save()
            instance.position = new_position
        instance.save()
        return instance


class SentenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sentence
        fields = ('id', 'content', 'position')

    def create(self, validated_data):
        topic = self.context['topic']
        sentences_of_topic = Sentence.objects.all().filter(topic=topic)
        position = 0
        for sentence in sentences_of_topic:
            position = max(position, sentence.position)
        sentence = Sentence(topic=topic, content=validated_data['content'], position=position + 1)
        sentence.save()
        return sentence

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content')
        if instance.position != validated_data.get('position'):
            new_position = validated_data.get('position')
            sentences = Sentence.objects.all().filter(topic=instance.topic)
            if new_position < instance.position:
                for sentence in sentences:
                    if new_position <= sentence.position < instance.position:
                        sentence.position = sentence.position + 1
                        sentence.save()
            else:
                for sentence in sentences:
                    if instance.position < sentence.position <= new_position:
                        sentence.position = sentence.position - 1
                        sentence.save()
            instance.position = new_position
        instance.save()
        return instance
