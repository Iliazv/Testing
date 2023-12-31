# Generated by Django 2.2.14 on 2023-10-18 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Footer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(max_length=1000, verbose_name='Текст футера')),
            ],
        ),
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=100, verbose_name='Ссылка')),
                ('photo', models.ImageField(blank=True, upload_to='page_images', verbose_name='Фото')),
                ('text', models.TextField(max_length=5000, verbose_name='Текст')),
            ],
        ),
    ]
