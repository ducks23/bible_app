from rest_framework.response import Response
from rest_framework.views import APIView
from my_app.models import Chapter, BibleVersion, Verse


class VerseView(APIView):
    def post(self, request):
        # Assuming you're sending JSON data with 'content_type': 'application/json'
        data = request.data

        # Extracting data directly
        chapter_id = data.get(
            "chapter_id"
        )  # Ensure this matches with your frontend's JSON key
        verse_number = data.get("verse_number")
        text = data.get("text")
        version_id = data.get("version_id")

        # Fetching related objects
        try:
            chapter = Chapter.objects.get(id=chapter_id)
            version = BibleVersion.objects.get(id=version_id)
        except (Chapter.DoesNotExist, BibleVersion.DoesNotExist) as e:
            return Response({"error": str(e)}, status=400)

        # Creating the Verse object
        verse = Verse(
            chapter=chapter, verse_number=verse_number, text=text, version=version
        )
        verse.save()

        # Sending a basic response back
        return Response({"message": "Verse created successfully"}, status=201)
