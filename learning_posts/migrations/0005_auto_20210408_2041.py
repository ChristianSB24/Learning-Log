# Generated by Django 2.2 on 2021-04-09 01:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('learning_posts', '0004_auto_20210408_2039'),
    ]

    operations = [
        migrations.AlterField(
            model_name='topic',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]