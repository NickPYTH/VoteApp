# Generated by Django 3.2 on 2021-04-23 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('create_form', '0021_auto_20210423_1752'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='form',
            options={'verbose_name': 'Формы', 'verbose_name_plural': 'Таблица форм'},
        ),
        migrations.AlterModelOptions(
            name='question',
            options={'verbose_name': 'Вопросы', 'verbose_name_plural': 'Таблица вопросов'},
        ),
        migrations.AlterField(
            model_name='question',
            name='answer_field',
            field=models.ManyToManyField(to='create_form.Answer', verbose_name='Варианты ответа'),
        ),
        migrations.AlterField(
            model_name='question',
            name='description',
            field=models.TextField(blank=True, verbose_name='Описание вопроса'),
        ),
        migrations.AlterField(
            model_name='question',
            name='has_comment',
            field=models.BooleanField(verbose_name='Наличие поля коментария'),
        ),
        migrations.AlterField(
            model_name='question',
            name='header',
            field=models.TextField(verbose_name='Заголовок вопроса'),
        ),
        migrations.AlterField(
            model_name='question',
            name='question_id',
            field=models.CharField(max_length=50, verbose_name='ID вопроса'),
        ),
    ]
