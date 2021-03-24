from django.shortcuts import render
from create_form.models import Question, Answer, Form, FormSended, Comments, SubAnswer, SubAnswerChosen
from django.http import HttpResponse
import random
import datetime

def check_date(end):
    end = str(end)
    today = str(datetime.datetime.now())[:10]
    if int(end[:4]) < int(today[:4]):
        return False
    elif int(end[:4]) == int(today[:4]):
        if int(end[5:7]) < int(today[5:7]):
            return False
        elif int(end[5:7]) == int(today[5:7]):
            if int(end[8:10]) < int(today[8:10]):
                return False
            else:
                return True
        else:
            return True
    else:
        return True
            

def send_form(request):
    if request.method == "GET":
        form_link = request.path[1:-1]
        try:
            query = Form.objects.get(form_id=form_link)
            form_id = query.form_id
        except:
            return render(request, "send_form/bad_form.html")

        try:
            if request.COOKIES[form_id] == True:
                return render(request, "send_form/bad_form.html")
        except:
            pass

        ques_ans = []
        ques_comms = []
        for i, ques in enumerate(query.questions.all()):
            tmp = []
            tmp.append(i)
            tmp.append(ques.header)
            tmp.append(ques.description)
            tmp.append(len(ques.answer_field.all()))
            print(ques)
            pairs = []
            if len(ques.answer_field.first().sub_answer.all()) != 0:
                tmp.append("sub")
                for ans in ques.answer_field.all():
                    pairs_tmp = []
                    for a_s in ans.sub_answer.all():
                        pairs_tmp.append(a_s.answer_value)
                    pairs.append([ans.answer_value, pairs_tmp])
                tmp.append(pairs)
            else:
                tmp.append("other")

            tmp.append([ans for ans in ques.answer_field.all()])

            ques_ans.append(tmp)
            if ques.has_comment:
                ques_comms.append(ques.header)
        print(ques_ans)
        try:
            if int(query.end_date.month) < 10:
                month = '0' + str(query.end_date.month)
            else:
                month = str(query.end_date.month)
                
            data = {
                'ques_comms' : ques_comms,
                'data' : ques_ans,
                'form_name' : query.form_name,
                'end_date' : query.end_date,
                'end_date_short' : str(query.end_date.year) + '-' + month + '-' + str(query.end_date.day),
            }
            response = HttpResponse(render(request, "send_form/fill_form.html", context=data))
            return response
        except:
            return render(request, "send_form/bad_form.html")
    elif request.method == "POST":

        if not request.COOKIES.get(request.path[1:-1]):
            form_link = request.path[1:-1]
            form_name = request.POST.get('formName')
            form = Form.objects.get(form_name=form_name)


            if not check_date(form.end_date):
                return render(request, "send_form/date_is_over.html")


            questions_query = form.questions.all()
            ans_list = []
            sended_form = FormSended.objects.create(form=Form.objects.get(form_name=form_name), report_id=random.randint(1,1000000))
            
            for ques in questions_query:
                ans_list.append(request.POST.get(ques.header))
                ans = Answer.objects.get(answer_id = ques.question_id, answer_value = request.POST.get(ques.header))
                sended_form.answers.add(ans)
                
                if request.POST.get("sub_"+str(ques.header), False):
                    sub_ans = ans.sub_answer.get(answer_value=request.POST.get("sub_"+str(ques.header), False))
                    SubAnswerChosen.objects.create(answer=ans, form=sended_form, sub_answer=sub_ans).save()

                if ques.has_comment:
                    Comments.objects.create(report_id=sended_form, question=ques, text=request.POST.get(ques.header+'_comment'))

            query = Form.objects.filter(form_id=form_link)[0]
            questions_list = []
            answers_list = []
            for question in query.questions.all():  
                questions_list.append(question)

            full_data = FormSended.objects.filter(form = query)
            result = {}
            only_digit = True 
            counter = 0
            question_num = len(full_data[0].answers.all())
            for i, data in enumerate(full_data):
                tmp = {}
                for j, answer in enumerate(data.answers.all()):
                    tmp[j] = answer.answer_value
                    if not tmp[j].isdigit():
                        only_digit = False
                result[i] = tmp
            question_dict = {}
            stats_list = [ [i, 0] for i in range(question_num)]
            
            for ans in full_data[0].answers.all():
                for ques in Question.objects.filter(question_id=ans.answer_id):
                    question_dict[ques.header] = [[el.answer_value, 0]  for el in ques.answer_field.all()]

            for i in full_data:
                for j in i.answers.all():
                    for el in question_dict.get(Question.objects.get(question_id=j.answer_id).header):
                        if j.answer_value in el:
                            el[1] += 1
                            stats_list[counter][1] += 1 
                            counter += 1
                counter = 0

            

            result = []
            for i, rec in enumerate(question_dict):
                result.append([rec, question_dict[rec], stats_list[i][1]])

            data = {
                'data' : result,
                'form_name' : form_name,
                'end_date' : form.end_date,
            }
            response = HttpResponse(render(request, "send_form/success_send.html", context=data))
            response.set_cookie(query.form_id, True, max_age=60*60*24*7) # one week - one vote
            return response

        else:
            form_link = request.path[1:-1]
            form_name = request.POST.get('formName')
            form = Form.objects.get(form_name=form_name)


            questions_query = form.questions.all()
            ans_list = []
            
            for ques in questions_query:
                ans_list.append(request.POST.get(ques.header))



            query = Form.objects.filter(form_id=form_link)[0]
            questions_list = []
            answers_list = []
            for question in query.questions.all():  
                questions_list.append(question)

            full_data = FormSended.objects.filter(form = query)
            result = {}
            only_digit = True 
            counter = 0
            question_num = len(full_data[0].answers.all())
            for i, data in enumerate(full_data):
                tmp = {}
                for j, answer in enumerate(data.answers.all()):
                    tmp[j] = answer.answer_value
                    if not tmp[j].isdigit():
                        only_digit = False
                result[i] = tmp
            question_dict = {}
            stats_list = [ [i, 0] for i in range(question_num)]
            
            for ans in full_data[0].answers.all():
                for ques in Question.objects.filter(question_id=ans.answer_id):
                    question_dict[ques.header] = [[el.answer_value, 0]  for el in ques.answer_field.all()]

            for i in full_data:
                for j in i.answers.all():
                    for el in question_dict.get(Question.objects.get(question_id=j.answer_id).header):
                        if j.answer_value in el:
                            el[1] += 1
                            stats_list[counter][1] += 1 
                            counter += 1
                counter = 0

            

            result = []
            for i, rec in enumerate(question_dict):
                result.append([rec, question_dict[rec], stats_list[i][1]])

            data = {
                'data' : result,
                'form_name' : form_name,
                'end_date' : form.end_date,
            }
            response = HttpResponse(render(request, "send_form/success_send.html", context=data))
            response.set_cookie(query.form_id, True, max_age=60*60*24*7) # one week - one vote
            return response