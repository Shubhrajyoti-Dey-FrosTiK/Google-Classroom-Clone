# Generated by Django 3.0.7 on 2021-08-28 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20210828_1459'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='score',
            field=models.BooleanField(choices=[(0, 'Ungraded'), ('', 'Choose your score'), ('1', '1 - Very Poor'), ('2', '2 - Below Average'), ('3', '3 - Average'), ('4', '4 - Good'), ('5', '5 - Excellent')], default=False),
        ),
    ]