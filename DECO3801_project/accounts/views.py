from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.shortcuts import render, redirect

from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view

class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "registration/signup.html"

    def register(self, request):
        if request.method == "GET":
            return render(request, template_name, {"form": form_class})

        elif request.method == "POST":
            form = UserCreationForm(request.POST)
            if form.is_valid():
                user = form.save()
                login(request, user)
                return redirect(success_url)

@api_view(['GET', 'POST'])
def employee_list(request):
    if request.method == 'GET':
        data = Employee.objects.all();
        serializer = EmployeeSerializer(data, context={'request': request})

        return Response(seralizer.data)

    elif request.method == 'POST':
        serializer = EmployeeSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
