# Generated by Django 3.1.5 on 2021-01-30 12:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('create_form', '0007_auto_20210130_1548'),
    ]

    operations = [
        migrations.AddField(
            model_name='comments',
            name='report_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='create_form.formsended'),
            preserve_default=False,
        ),
    ]
