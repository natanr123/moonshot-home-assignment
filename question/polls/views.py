from django.shortcuts import render

from django.http import HttpResponse
from .models import Question
from rest_framework import routers, serializers, viewsets


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")