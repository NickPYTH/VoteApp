# Generated by Django 3.1.5 on 2021-03-26 05:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('create_form', '0015_auto_20210326_0523'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='header',
            field=models.TextField(),
        ),
    ]
