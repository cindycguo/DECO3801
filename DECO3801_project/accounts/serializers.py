from rest_framework import serializers
from .models import Employee, Supervisor

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ('emp_no', 'first_name', 'last_name', 'sup_no', 'hire_date')

