# Generated by Django 3.2 on 2021-04-23 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('create_form', '0020_auto_20210423_1748'),
    ]

    operations = [
        migrations.AlterField(
            model_name='form',
            name='end_date',
            field=models.DateField(verbose_name='Дата окончания действия формы'),
        ),
        migrations.AlterField(
            model_name='form',
            name='form_id',
            field=models.CharField(max_length=60, verbose_name=' ID формы'),
        ),
        migrations.AlterField(
            model_name='form',
            name='password',
            field=models.CharField(max_length=60, verbose_name='Пароль для просмота статистики'),
        ),
        migrations.AlterField(
            model_name='form',
            name='qr_image',
            field=models.ImageField(upload_to='qrs/', verbose_name='QR ссылка на форму'),
        ),
        migrations.AlterField(
            model_name='form',
            name='questions',
            field=models.ManyToManyField(to='create_form.Question', verbose_name='Вопросы формы (выделены)'),
        ),
        migrations.AlterField(
            model_name='form',
            name='slug',
            field=models.CharField(max_length=120, verbose_name='Ссылка на форму'),
        ),
    ]
