# Generated by Django 3.2.6 on 2021-08-20 23:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('brewdout', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='check_in',
            name='submission_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
