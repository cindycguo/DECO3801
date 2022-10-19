from django.urls import path
from .views import *

urlpatterns = [
    path('', index),
    path('employee', index),
    path('notes', index),
    path('sessions', index),
    path('newsessions', index),
    path('postsessions', index),
]
