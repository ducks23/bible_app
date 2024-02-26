from my_app.models import Book


def saveBooks():
    bible_books = [
        {"name": "Genesis", "order": 1, "testament": "OT"},
        {"name": "Exodus", "order": 2, "testament": "OT"},
        {"name": "Leviticus", "order": 3, "testament": "OT"},
        {"name": "Numbers", "order": 4, "testament": "OT"},
        {"name": "Deuteronomy", "order": 5, "testament": "OT"},
        {"name": "Joshua", "order": 6, "testament": "OT"},
        {"name": "Judges", "order": 7, "testament": "OT"},
        {"name": "Ruth", "order": 8, "testament": "OT"},
        {"name": "1 Samuel", "order": 9, "testament": "OT"},
        {"name": "2 Samuel", "order": 10, "testament": "OT"},
        {"name": "1 Kings", "order": 11, "testament": "OT"},
        {"name": "2 Kings", "order": 12, "testament": "OT"},
        {"name": "1 Chronicles", "order": 13, "testament": "OT"},
        {"name": "2 Chronicles", "order": 14, "testament": "OT"},
        {"name": "Ezra", "order": 15, "testament": "OT"},
        {"name": "Nehemiah", "order": 16, "testament": "OT"},
        {"name": "Esther", "order": 17, "testament": "OT"},
        {"name": "Job", "order": 18, "testament": "OT"},
        {"name": "Psalms", "order": 19, "testament": "OT"},
        {"name": "Proverbs", "order": 20, "testament": "OT"},
        {"name": "Ecclesiastes", "order": 21, "testament": "OT"},
        {"name": "Song of Solomon", "order": 22, "testament": "OT"},
        {"name": "Isaiah", "order": 23, "testament": "OT"},
        {"name": "Jeremiah", "order": 24, "testament": "OT"},
        {"name": "Lamentations", "order": 25, "testament": "OT"},
        {"name": "Ezekiel", "order": 26, "testament": "OT"},
        {"name": "Daniel", "order": 27, "testament": "OT"},
        {"name": "Hosea", "order": 28, "testament": "OT"},
        {"name": "Joel", "order": 29, "testament": "OT"},
        {"name": "Amos", "order": 30, "testament": "OT"},
        {"name": "Obadiah", "order": 31, "testament": "OT"},
        {"name": "Jonah", "order": 32, "testament": "OT"},
        {"name": "Micah", "order": 33, "testament": "OT"},
        {"name": "Nahum", "order": 34, "testament": "OT"},
        {"name": "Habakkuk", "order": 35, "testament": "OT"},
        {"name": "Zephaniah", "order": 36, "testament": "OT"},
        {"name": "Haggai", "order": 37, "testament": "OT"},
        {"name": "Zechariah", "order": 38, "testament": "OT"},
        {"name": "Malachi", "order": 39, "testament": "OT"},
        {"name": "Matthew", "order": 40, "testament": "NT"},
        {"name": "Mark", "order": 41, "testament": "NT"},
        {"name": "Luke", "order": 42, "testament": "NT"},
        {"name": "John", "order": 43, "testament": "NT"},
        {"name": "Acts", "order": 44, "testament": "NT"},
        {"name": "Romans", "order": 45, "testament": "NT"},
        {"name": "1 Corinthians", "order": 46, "testament": "NT"},
        {"name": "2 Corinthians", "order": 47, "testament": "NT"},
        {"name": "Galatians", "order": 48, "testament": "NT"},
        {"name": "Ephesians", "order": 49, "testament": "NT"},
        {"name": "Philippians", "order": 50, "testament": "NT"},
        {"name": "Colossians", "order": 51, "testament": "NT"},
        {"name": "1 Thessalonians", "order": 52, "testament": "NT"},
        {"name": "2 Thessalonians", "order": 53, "testament": "NT"},
        {"name": "1 Timothy", "order": 54, "testament": "NT"},
        {"name": "2 Timothy", "order": 55, "testament": "NT"},
        {"name": "Titus", "order": 56, "testament": "NT"},
        {"name": "Philemon", "order": 57, "testament": "NT"},
        {"name": "Hebrews", "order": 58, "testament": "NT"},
        {"name": "James", "order": 59, "testament": "NT"},
        {"name": "1 Peter", "order": 60, "testament": "NT"},
        {"name": "2 Peter", "order": 61, "testament": "NT"},
        {"name": "1 John", "order": 62, "testament": "NT"},
        {"name": "2 John", "order": 63, "testament": "NT"},
        {"name": "3 John", "order": 64, "testament": "NT"},
        {"name": "Jude", "order": 65, "testament": "NT"},
        {"name": "Revelation", "order": 66, "testament": "NT"},
    ]
    for book in bible_books:
        b = Book(name=book["name"], order=book["order"], testament=["testament"])
        b.save()


def import_data():
    """
    Open .json file and convert to python dictionary
    """
    import json
    path = "/Users/jesseleonard/code/bible/Bible-kjv/"
    book = "Genesis.json"

    with open(path + book) as f:
        data = json.load(f)
        return data

print(import_data())
