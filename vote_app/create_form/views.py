from django.shortcuts import render
from .models import Question, Answer, Form, Comments
import hashlib
from django.conf import settings
import qrcode
import random
from django.conf import settings


def index(request):
    return render(request, "create_form/index.html")

def create_form(request):
    if request.method == "POST":
        form_name = request.POST['form_name']
        end_date = request.POST.get('end_date', False)
        if not end_date:
            end_date = '2077-07-07'
        password = request.POST['form_pass']
        i = 1
        questions = {}
        while True:
            questions_tmp = {}
            try:
                is_def = True
                tmp = 'question_header_' + str(i)
                questions_tmp['Header']=request.POST[tmp]
                tmp = 'question_description_' + str(i)
                questions_tmp['Description']=request.POST[tmp]
                j = 1
                while True:
                    try:
                        request.POST[str(i)+"_"+str(j)+"_ans"]
                        tmp = request.POST[str(i)+"_"+str(j)+"_ans"]
                        questions_tmp['Ans_'+str(j)] = tmp
                        is_def = False
                    except:
                        break
                    j += 1
                if is_def:
                    for j in range(1, 6):
                        questions_tmp['Ans_'+str(i)+'_'+str(j)] = j
                questions[i] = questions_tmp
            except:
                break
            i += 1
        temporaly_link = hashlib.sha1(form_name.encode('utf-8')).hexdigest()
        questions['end_date'] = end_date

        img = qrcode.make(settings.INDEX_LINK+str(temporaly_link))
        img.save("mediafiles/qrs/"+str(temporaly_link)+".png")

        try:
            form = Form.objects.create(form_name=form_name, end_date=end_date, form_id = temporaly_link, slug = settings.INDEX_LINK+str(temporaly_link), qr_image = "qrs/"+str(temporaly_link)+".png", password=password)
        except:
            data = {
                'vote_exist' : True,
            }
            return render(request, "create_form/create_form.html", context=data)

        for i, el in enumerate(questions):
            is_def = True
            if type(questions[el]) is dict:
                header = questions[el].get("Header")
                description = questions[el].get("Description")
                ls = []
                for j in range(len(questions[el])-2):
                    ans_tmp = 'Ans_'+str(j+1)   
                    if questions[el].get(ans_tmp) != None:
                        ls.append(questions[el].get(ans_tmp))
                        is_def = False
                uniq_ques_key = random.randint(1,9000000)
                
                if request.POST['isCommentVal_'+str(i+1)] == "Yes":
                    record = Question.objects.create(header=header, description=description, question_id = uniq_ques_key, has_comment = True)
                else:
                    record = Question.objects.create(header=header, description=description, question_id = uniq_ques_key, has_comment = False)
                if is_def:
                    for val in range(1,6):
                        tmp = Answer.objects.create(answer_value=val, answer_id=uniq_ques_key)
                        record.answer_field.add(tmp)
                else:
                    for ell in ls:
                        tmp = Answer.objects.create(answer_value=ell, answer_id=uniq_ques_key)
                        record.answer_field.add(tmp)
                form.questions.add(record)

        data = {
            'form_name' : form_name,
            'slug' : settings.INDEX_LINK+str(temporaly_link),
            'GOOGLE_RECAPTCHA_SITE_KEY': settings.GOOGLE_RECAPTCHA_SITE_KEY,
        }
        return render(request, "create_form/success_created_form.html", context=data)
    else:
        data = {
            'vote_exist' : False,
        }
        return render(request, "create_form/create_form.html", context=data)