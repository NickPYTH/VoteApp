from django.shortcuts import render
from create_form.models import Question, Answer, Form, FormSended, Comments
from django.http import HttpResponse
import random
import datetime
import pandas as pd
from math import sqrt
from collections import Counter
from django.conf import settings
import json

def login_stats(request):
    if request.method == "GET":
        data = {
                'password_error' : False,
                'form_error' : False,
            }
        return render(request, "stats/login_stats.html", context=data)
    elif request.method == "POST":
        password = request.POST.get('password')
        form_name = request.POST.get('form_name')

        if len(Form.objects.filter(form_name=form_name)) == 0:
            data = {
                'password_error' : False,
                'form_error' : True,
            }
            return render(request, "stats/login_stats.html", context=data)
        
        if len(Form.objects.filter(password=password)) == 0:
            data = {
                'password_error' : True,
                'form_error' : False,
            }
            return render(request, "stats/login_stats.html", context=data)

        forms = FormSended.objects.filter(form=Form.objects.get(form_name=form_name))
        answers = []
        questions = {}
        questions_list = []
        comments = {}
        id_list = [ el.report_id for el in forms ]
        comments_list = []
        for form in forms:
            for answer in form.answers.all():
                question = Question.objects.get(question_id=answer.answer_id)
                if question.has_comment:
                    comments_list.append([form.report_id, question.header, Comments.objects.get(report_id=form, question=question).text])
                if question.header not in questions:
                    questions[question.header] = []
                    questions_list.append(question)
                answers.append(answer.answer_value)

        const_jump = int(sqrt(len(answers)))
        jump = const_jump
        group_answers = []
        tmp = []
        for i, answer in enumerate(answers):
            if jump != 0:
                tmp.append(answer)
                jump -= 1
            else:
                jump = int(sqrt(len(answers)))
                tmp = []
                tmp.append(answer)
                jump -= 1
            if len(tmp) == const_jump:  group_answers.append(tmp)

        
        for i, question in enumerate(questions):    
            questions[question].append(group_answers[i][0])

        questions['id'] = id_list
        
        forms_sended_df = pd.DataFrame(questions)
        forms_sended_df = forms_sended_df.set_index('id')

        comments['id'] = [el[0] for el in comments_list]
        comments['Вопрос'] = [el[1] for el in comments_list]
        comments['Комментарий'] = [el[2] for el in comments_list]

        comments_df = pd.DataFrame(comments)
        comments_df = comments_df.set_index('id')

        current_form = Form.objects.get(form_name=form_name)

        '''form_info = {}
        for ques in current_form.questions.all():
            form_info[ques.header] = Answer.objects.filter(answer_id=ques.question_id)
            print(len(Answer.objects.filter(answer_id=ques.question_id)))
        form_info_df = pd.DataFrame(form_info)'''

        output = pd.ExcelWriter('mediafiles/statistic_files/'+str(current_form.form_id)+'.xlsx', engine = 'xlsxwriter')
        forms_sended_df.to_excel(output, sheet_name = 'Отправленные')
        comments_df.to_excel(output, sheet_name = 'Комментарии')
        #form_info_df.to_excel(output, sheet_name = 'Вопросы-Ответы')
        output.save()

        questions.pop('id', None)
        res = []
        q_list = []
        ans_list = []
        for ques in questions_list:
            q_list.append(ques.header)
            tmp = []
            for ans in Answer.objects.filter(answer_id=ques.question_id):
                tmp.append(ans.answer_value)
            ans_list.append(tmp)
        for i, ques in enumerate(questions):
            tmp = []
            tmp.append(ques)
            tmp_1 = []
            for q in questions[ques]:
                tmp_1.append(q)
            tmp_1 = Counter(tmp_1)
            ans_list_val = []
            for el in tmp_1:
                ans_list_val.append(tmp_1[el]) 
            tmp.append(ans_list_val)
            tmp.append(ans_list[i])
            res.append(tmp)
        
        data = {
            'download_link' : settings.INDEX_LINK+'mediafiles/statistic_files/'+str(current_form.form_id)+'.xlsx',
            'form_name' : form_name,
            'questions' : res,
            'data' : res,
        }
        return render(request, "stats/get_stats.html", context=data)




