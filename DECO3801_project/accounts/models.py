import uuid

from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


# Create your models here.
class Supervisor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sup_no = models.IntegerField(_('employee number'), primary_key=True)
    first_name = models.CharField(_('First name'), max_length=15)
    last_name = models.CharField(_('Last name'), max_length=15)

    def __str__(user):
        return user.first_name


class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True)
    first_name = models.CharField(_('First name'), max_length=15, default='SOME STRING')
    last_name = models.CharField(_('Last name'), max_length=15, default='SOME STRING')
    emp_no = models.IntegerField(_('employee number'), primary_key=True, default=str(uuid.uuid4().int)[:6])
    
    def __str__(user):
        return user.first_name


