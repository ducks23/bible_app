import json

import os
from my_app.models import (
    Book,
    Chapter,
    Verse,
    BibleVersion,
)

path = "/Users/jesseleonard/code/bible/Bible-kjv/"


def get_filenames(folder_path):
    filenames = []
    for file in os.listdir(folder_path):
        if os.path.isfile(os.path.join(folder_path, file)):
            filenames.append(file)
    return filenames


def testament_checker(book_name):
    old_testament_books = [
        "Genesis",
        "Exodus",
        "Leviticus",
        "Numbers",
        "Deuteronomy",
        "Joshua",
        "Judges",
        "Ruth",
        "1Samuel",
        "2Samuel",
        "1Kings",
        "2Kings",
        "1Chronicles",
        "2Chronicles",
        "Ezra",
        "Nehemiah",
        "Esther",
        "Job",
        "Psalms",
        "Proverbs",
        "Ecclesiastes",
        "Song of Solomon",
        "Isaiah",
        "Jeremiah",
        "Lamentations",
        "Ezekiel",
        "Daniel",
        "Hosea",
        "Joel",
        "Amos",
        "Obadiah",
        "Jonah",
        "Micah",
        "Nahum",
        "Habakkuk",
        "Zephaniah",
        "Haggai",
        "Zechariah",
        "Malachi",
    ]

    new_testament_books = [
        "Matthew",
        "Mark",
        "Luke",
        "John",
        "Acts",
        "Romans",
        "1Corinthians",
        "2Corinthians",
        "Galatians",
        "Ephesians",
        "Philippians",
        "Colossians",
        "1Thessalonians",
        "2Thessalonians",
        "1Timothy",
        "2Timothy",
        "Titus",
        "Philemon",
        "Hebrews",
        "James",
        "1Peter",
        "2Peter",
        "1John",
        "2John",
        "3John",
        "Jude",
        "Revelation",
    ]

    if book_name in old_testament_books:
        return "OT"
    elif book_name in new_testament_books:
        return "NT"
    else:
        return "Not a valid book name"


def parse():
    """
    Open .json file and convert to python dictionary
    """
    files = get_filenames(path)
    for file_name in files:
        with open(path + file_name) as f:
            book_name = file_name[:-5]
            version = BibleVersion(
                name="King James Version", abbreviation="KJV", language="english"
            )
            version.save()
            data = json.load(f)
            testament = testament_checker(book_name)
            book = Book(book_name=book_name, order=0, testament=testament)
            book.save()
            for i in range(len(data["chapters"])):
                chapter = Chapter(book=book, book_name=book_name, chapter_number=i + 1)
                chapter.save()
                verses = data["chapters"][i]["verses"]  # get verses
                verse_num = 1
                for verse in verses:
                    v = Verse(
                        chapter=chapter,
                        chapter_number=i + 1,
                        verse_number=verse_num,
                        book_name=book_name,
                        text=verse["text"],
                        version=version,
                    )
                    v.save()
                    verse_num = verse_num + 1
                    print(verse["text"])
