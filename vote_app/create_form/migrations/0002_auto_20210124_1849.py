# Generated by Django 3.1.5 on 2021-01-24 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('create_form', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='form_name',
            field=models.CharField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='question',
            name='header',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]