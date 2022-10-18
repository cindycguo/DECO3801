from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.shortcuts import render, redirect

from .models import *
from rest_framework import viewsets
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening


class EmployeeView(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)


@api_view(['GET'])
def showAllEmployees(request):
    employees = Employee.objects.all()
    serilizer = EmployeeSerializer(employees, many=True)
    return Response(serilizer.data)


@api_view(['GET'])
def showSingleEmployee(request, pk):
    employee = Employee.objects.get(emp_no=pk)
    serilizer = EmployeeSerializer(employee, many=False)
    return Response(serilizer.data)


@api_view(['POST'])
def addEmployee(request):
    serilizer = EmployeeSerializer(data=request.data)

    if serilizer.is_valid():
        serilizer.save()

    return Response(serilizer.data)


@api_view(['PUT'])
def updateEmployee(request, pk):
    employee = Employee.objects.get(emp_no=pk)
    serilizer = EmployeeSerializer(instance=employee, data=request.data)

    if serilizer.is_valid():
        serilizer.save()

    return Response(serilizer.data)


@api_view(['DELETE'])
def deleteEmployee(request, pk):
    employee = Employee.objects.get(emp_no=pk)
    employee.delete()

    return Response('Session delete successfully!')


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
