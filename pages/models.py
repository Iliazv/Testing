from django.db import models


class Page(models.Model):
    url = models.CharField(verbose_name='Ссылка', max_length=100)
    photo = models.ImageField(upload_to='page_images', blank=True, verbose_name='Фото')
    text = models.TextField(verbose_name='Текст', max_length=5000)

    def __str__(self):
        return self.url
    
    class Meta:
        verbose_name = 'Страница'
        verbose_name_plural = 'Страницы'
    

class Footer(models.Model):
    text = models.TextField(verbose_name='Текст футера', max_length=1000)

    def __str__(self):
        return f'{self.text[:45]}...'
    
    class Meta:
        verbose_name = 'Футер'
        verbose_name_plural = 'Футер'