from django.db import models
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Question(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    author = models.ForeignKey(User,default=0, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.id)+":"+self.title