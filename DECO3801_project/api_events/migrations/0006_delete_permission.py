# Generated by Django 4.1.1 on 2022-10-16 14:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api_events", "0005_alter_permission_options_permission_status_and_more"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Permission",
        ),
    ]
