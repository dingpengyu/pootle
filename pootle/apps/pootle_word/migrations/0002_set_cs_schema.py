# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-07 13:29
from __future__ import unicode_literals

from django.db import migrations

from pootle.core.utils.db import set_mysql_collation_for_column


def make_stem_root_cs(apps, schema_editor):
    cursor = schema_editor.connection.cursor()
    set_mysql_collation_for_column(
        apps,
        cursor,
        "pootle_word.Stem",
        "root",
        "utf8_bin",
        "varchar(255)")


class Migration(migrations.Migration):

    dependencies = [
        ('pootle_word', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(make_stem_root_cs),        
    ]