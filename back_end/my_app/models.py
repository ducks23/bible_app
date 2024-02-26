from django.db import models


class BibleVersion(models.Model):
    name = models.CharField(max_length=100)
    abbreviation = models.CharField(max_length=10)
    language = models.CharField(max_length=50)
    info = models.TextField(blank=True)


class Book(models.Model):
    book_name = models.TextField(default="")
    order = models.IntegerField()
    testament_choices = (
        ("OT", "Old Testament"),
        ("NT", "New Testament"),
    )
    testament = models.CharField(max_length=2, choices=testament_choices, default="OT")


class Chapter(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    book_name = models.TextField(default="")
    chapter_number = models.IntegerField(blank=True)


class Verse(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    chapter_number = models.IntegerField()
    book_name = models.TextField(default="")
    verse_number = models.IntegerField(blank=True)
    text = models.TextField(blank=True)
    version = models.ForeignKey(BibleVersion, on_delete=models.CASCADE)
