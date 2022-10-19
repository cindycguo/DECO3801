# Generated by Django 4.1.1 on 2022-10-16 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api_events", "0004_permission"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="permission",
            options={"ordering": ["start_date"]},
        ),
        migrations.AddField(
            model_name="permission",
            name="status",
            field=models.CharField(
                choices=[
                    ("ACT", "Active"),
                    ("INA", "Inactive"),
                    ("CAN", "Cancelled"),
                    ("FIN", "Finished"),
                ],
                default="INA",
                max_length=3,
            ),
        ),
        migrations.AddField(
            model_name="permission",
            name="type",
            field=models.CharField(
                choices=[
                    ("DEV", "Development"),
                    ("TRA", "Training"),
                    ("UNG", "Unguided"),
                    ("GUD", "Guided"),
                ],
                default="GUD",
                max_length=3,
            ),
        ),
    ]