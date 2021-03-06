from django.contrib import admin
from .models import Question, Form, Answer, FormSended, Comments, SubAnswer, SubAnswerChosen


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("header", "description")

@admin.register(Form)
class FormAdmin(admin.ModelAdmin):
    list_display = ("form_name", "end_date")

@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ("answer_value", )

@admin.register(SubAnswer)
class SubAnswerAdmin(admin.ModelAdmin):
    list_display = ("answer_value", )

@admin.register(FormSended)
class FormSendedAdmin(admin.ModelAdmin):
    list_display = ("report_id", "form")

@admin.register(Comments)
class CommentsAdmin(admin.ModelAdmin):
    pass

@admin.register(SubAnswerChosen)
class SubAnswerChosenAdmin(admin.ModelAdmin):
    list_display = ("answer", "sub_answer")