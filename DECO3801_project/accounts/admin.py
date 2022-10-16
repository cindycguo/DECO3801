from django.contrib import admin
from .models import *
from django.contrib.auth.models import Permission
# Register your models here.

admin.site.register(Employee)
admin.site.register(Supervisor)


