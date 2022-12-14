"""DECO3801_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api_events.views import SessionView
from accounts.views import EmployeeView
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static

route = routers.DefaultRouter()
route.register("employees", EmployeeView, basename="employeeview")
route.register("sessions", SessionView, basename="sessionview")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api_events.urls')),
    path('', include('frontend.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path("accounts/", include("accounts.urls")),
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
