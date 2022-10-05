from django.urls import path
from .views import *
from django.views.generic.base import TemplateView
urlpatterns = [
    path('', TemplateView.as_view(template_name='home.html'), name='homepage'),
    path('notes', index),
    path('sessions', index),
]