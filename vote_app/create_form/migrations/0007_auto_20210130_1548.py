# Generated by Django 3.1.5 on 2021-01-30 12:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('create_form', '0006_auto_20210127_2032'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comments',
            name='question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='create_form.question'),
        ),
    ]
