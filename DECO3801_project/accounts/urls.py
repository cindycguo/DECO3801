from django.urls import path, re_path

from .views import SignUpView


urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
    path(r'^api/employee/$', views.employee_list),
]
