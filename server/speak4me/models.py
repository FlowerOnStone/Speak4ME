from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class History(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    content = models.CharField(max_length=5000)


class PopularTopic(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=50)
    position = models.IntegerField()


class PopularSentence(models.Model):
    topic = models.ForeignKey(
        PopularTopic, on_delete=models.SET_NULL, null=True, blank=True)
    content = models.CharField(max_length=100)
    position = models.IntegerField()


class Topic(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    position = models.IntegerField()


class Sentence(models.Model):
    topic = models.ForeignKey(
        Topic, on_delete=models.SET_NULL, null=True, blank=True)
    content = models.CharField(max_length=5000)
    position = models.IntegerField()
