from django.contrib.auth.forms import AuthenticationForm
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from django.urls import path
from django.conf import settings
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('send_phone/', views.send_phone, name='send_phone'),
    path('<str:url>/', views.pages, name="page"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)