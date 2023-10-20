from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Page, Footer
from django.core.mail import send_mail, BadHeaderError
from django.shortcuts import get_object_or_404
from django.template.loader import render_to_string


def index(request):
    footer = Footer.objects.all()[0]
    context = {'footer': footer}
    return render(request, 'pages/index.html', context)

def send_phone(request):
    if request.method == 'POST':
        message = request.POST.get('phone')
        # email_template_name = 
        recieve = 'forghe2233@bk.ru'
        subject = "Получен номер телефона"
        c = {
            "message": message,
            'domain':'127.0.0.1:8000',
            'site_name': 'Website',
            'protocol': 'http',
            }
        # email = render_to_string(email_template_name, c)
        try:
            send_mail(subject, message, 'admin@example.com' , [recieve], fail_silently=False)
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
    context = {}
    return render(request, 'pages/index.html', context)

def pages(request, url):
    footer = Footer.objects.all()[0]
    page = get_object_or_404(Page, url=url)

    context = {'footer': footer, 'page': page}
    return render(request, 'pages/page.html', context)