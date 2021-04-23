from django.db import models
import datetime
from django.contrib import admin

class SubAnswer(models.Model):
    answer_id = models.CharField(max_length=160)
    answer_value = models.CharField(max_length=160)

    def __str__(self):
        return str(self.answer_value)
    
    class Meta:
        verbose_name = "Связанные ответы"
        verbose_name_plural = "Таблица связанных ответов"


class Answer(models.Model):
    answer_id = models.CharField(max_length=160)
    answer_value = models.CharField(max_length=160)
    sub_answer = models.ManyToManyField(SubAnswer, blank=True)

    class Meta:
        verbose_name = "ответы"
        verbose_name_plural = "Таблица ответов"

    def __str__(self):
        return str(self.answer_value)

class Question(models.Model):
    question_id = models.CharField(max_length=50, verbose_name="ID вопроса")
    header = models.TextField(verbose_name="Заголовок вопроса")
    description = models.TextField(blank=True, verbose_name="Описание вопроса")
    answer_field = models.ManyToManyField(Answer, verbose_name="Варианты ответа")
    has_comment = models.BooleanField(verbose_name="Наличие поля коментария")
    

    class Meta:
        verbose_name = "Вопросы"
        verbose_name_plural = "Таблица вопросов"

    def __str__(self):
        return str(self.header)

class Form(models.Model):
    form_name = models.CharField(max_length=150, unique=True, verbose_name="Имя формы")
    #start_date = models.DateField()
    end_date = models.DateField(verbose_name="Дата окончания действия формы")
    questions = models.ManyToManyField(Question, verbose_name="Вопросы формы (выделены)")
    slug = models.CharField(max_length=120, verbose_name="Ссылка на форму")
    form_id = models.CharField(max_length=60, unique=False, verbose_name=" ID формы")
    qr_image = models.ImageField(upload_to="qrs/", verbose_name="QR ссылка на форму")
    password = models.CharField(max_length=60, verbose_name="Пароль для просмота статистики")

    class Meta:
        verbose_name = "Формы"
        verbose_name_plural = "Таблица форм"

    def __str__(self):
        return str(self.form_name)

class FormSended(models.Model):
    form = models.ForeignKey(Form, on_delete = models.CASCADE)
    answers = models.ManyToManyField(Answer)
    report_id = models.CharField(max_length=50)
    

    class Meta:
        verbose_name = "заполненные формы"
        verbose_name_plural = "Таблица заполненных форм"

class Comments(models.Model):
    report_id = models.ForeignKey(FormSended, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.TextField()

    class Meta:
        verbose_name = "комментарии"
        verbose_name_plural = "Таблица коментариев"

    #def __str__(self):
    #    return str(self.text)


class SubAnswerChosen(models.Model):
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    form = models.ForeignKey(FormSended, on_delete=models.CASCADE)
    sub_answer = models.ForeignKey(SubAnswer, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.answer)

    class Meta:
        verbose_name = "Выбранные связанные ответы пользователями"
        verbose_name_plural = "Таблица выбранных связанных ответов"






