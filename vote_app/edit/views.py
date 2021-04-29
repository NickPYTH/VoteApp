from django.shortcuts import render
import random

def login_edit(request):

    data = {
        'val' : "images/build/build" + str(random.randint(1,4)) + ".gif",
    }

    return render(request, "edit/login_edit.html", context=data)