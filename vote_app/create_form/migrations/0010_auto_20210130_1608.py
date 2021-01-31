# Generated by Django 3.1.5 on 2021-01-30 13:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('create_form', '0009_auto_20210130_1603'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='has_comment',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='comments',
            name='report_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='create_form.formsended'),
        ),
    ]