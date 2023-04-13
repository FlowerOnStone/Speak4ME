from . import views
from django.urls import path
from knox import views as knox_views

urlpatterns = [
    path('api/register', views.RegisterAPI.as_view(), name='register'),
    path('api/login', views.LoginAPI.as_view(), name='login'),
    path('api/logout', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('api/history', views.ListCreateHistoryView.as_view()),
    path('api/history/<int:pk>', views.DeleteHistoryView.as_view()),
    path('api/popular_topic', views.ListCreatePopularTopicView().as_view()),
    path('api/popular_topic/<int:pk>', views.UpdateDeletePopularTopicView.as_view()),
    path('api/popular_sentence', views.ListCreatePopularSentenceView.as_view()),
    path('api/popular_sentence/<int:pk>', views.UpdateDeletePopularSentenceView.as_view()),
    path('api/topic', views.ListCreateTopicView().as_view()),
    path('api/topic/<int:pk>', views.UpdateDeleteTopicView.as_view()),
    path('api/sentence', views.ListCreateSentenceView.as_view()),
    path('api/sentence/<int:pk>', views.UpdateDeleteSentenceView.as_view()),
]
