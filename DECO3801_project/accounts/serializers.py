from rest_framework import serializers
from wsproto import ConnectionType
from .models import Employee, Supervisor



        

class SupervisorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supervisor
        fields = ('user', 'sup_no', 'first_name', 'last_name', 'hire_date')
        

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ('user', 'first_name', 'last_name', 'emp_no', 'hire_date', 'supervisor')