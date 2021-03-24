from django.db import models
import datetime
from django.contrib import admin

class SubAnswer(models.Model):
    answer_id = models.CharField(max_length=60)
    answer_value = models.CharField(max_length=60)

    def __str__(self):
        return str(self.answer_value)


class Answer(models.Model):
    answer_id = models.CharField(max_length=60)
    answer_value = models.CharField(max_length=60)
    sub_answer = models.ManyToManyField(SubAnswer, blank=True)

    class Meta:
        verbose_name = "ответы"
        verbose_name_plural = "Таблица ответов"

    def __str__(self):
        return str(self.answer_value)

class Question(models.Model):
    question_id = models.CharField(max_length=50)
    header = models.CharField(max_length=50)
    description = models.TextField()
    answer_field = models.ManyToManyField(Answer)
    has_comment = models.BooleanField()

    class Meta:
        verbose_name = "вопросы"
        verbose_name_plural = "Таблица вопросов"

    def __str__(self):
        return str(self.header)

class Form(models.Model):
    form_name = models.CharField(max_length=50, unique=True)
    #start_date = models.DateField()
    end_date = models.DateField()
    questions = models.ManyToManyField(Question)
    slug = models.CharField(max_length=120)
    form_id = models.CharField(max_length=60, unique=False)
    qr_image = models.ImageField(verbose_name="QR", upload_to="qrs/")
    password = models.CharField(max_length=60)

    class Meta:
        verbose_name = "формы"
        verbose_name_plural = "Таблица форм"

    def __str__(self):
        return str(self.form_name)

class FormSended(models.Model):
    form = models.ForeignKey(Form, on_delete = models.DO_NOTHING)
    answers = models.ManyToManyField(Answer)
    report_id = models.CharField(max_length=50)
    

    class Meta:
        verbose_name = "заполненные формы"
        verbose_name_plural = "Таблица заполненных форм"

class Comments(models.Model):
    report_id = models.ForeignKey(FormSended, on_delete=models.DO_NOTHING)
    question = models.ForeignKey(Question, on_delete=models.DO_NOTHING)
    text = models.TextField()

    class Meta:
        verbose_name = "комментарии"
        verbose_name_plural = "Таблица коментариев"

    #def __str__(self):
    #    return str(self.text)


class SubAnswerChosen(models.Model):
    answer = models.ForeignKey(Answer, on_delete=models.DO_NOTHING)
    form = models.ForeignKey(FormSended, on_delete=models.DO_NOTHING)
    sub_answer = models.ForeignKey(SubAnswer, on_delete=models.DO_NOTHING)

    def __str__(self):
        return str(self.answer)






