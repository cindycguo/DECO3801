# Generated by Django 4.1.1 on 2022-09-27 03:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api_events', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Appointment',
            new_name='Session',
        ),
        migrations.RenameModel(
            old_name='AppointmentStatus',
            new_name='SessionReason',
        ),
        migrations.RenameModel(
            old_name='AppointmentType',
            new_name='SessionStatus',
        ),
        migrations.RenameModel(
            old_name='AppointmentReason',
            new_name='SessionType',
        ),
    ]
