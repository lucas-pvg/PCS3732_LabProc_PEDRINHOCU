# Generated by Django 4.2.3 on 2023-08-04 13:51

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("arm_architecture", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="register",
            name="id",
            field=models.BigAutoField(
                auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
            ),
        ),
    ]
