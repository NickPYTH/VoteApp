"""vote_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from create_form import views as create_form_views
from send_form import views as send_form_views
from stats import views as stats_views
from edit import views as edit_views

urlpatterns = []

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    path('admin_page/', admin.site.urls, name="admin"),
    path('', create_form_views.index, name="index"),
    path('create_form/', create_form_views.create_form, name="create_form"),
    path('statistics/', stats_views.login_stats, name="stats"), 
    path('edit/', edit_views.login_edit, name="edit"), 
    re_path(r'[A-Z, a-z, 0-9]/', send_form_views.send_form, name="sendForm"),
]


    
