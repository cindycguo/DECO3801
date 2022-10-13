from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Supervisor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    sup_no = models.IntegerField(_('employee number'), primary_key=True)
    first_name = models.CharField(_('First name'), max_length=15)
    last_name = models.CharField(_('Last name'), max_length=15)
    hire_date = models.DateField(_('hire date'))

    def __str__(self, user):
        return user.first_name

class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    emp_no = models.IntegerField(_('employee number'), primary_key=True)
    hire_date = models.DateField(_('hire date'))
    supervisor = models.ForeignKey(Supervisor, on_delete=models.CASCADE)

    def __str__(self):
        return self.first_name + " " + str(self.emp_no)

