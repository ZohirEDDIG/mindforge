from django.conf import settings
from pymongo import MongoClient 
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def health(request):
    try:
        client = MongoClient(settings.MONGODB_URI, serverSelectionTimeoutMS=3000)
        client.admin.command('ping')
        database = 'up'
    except Exception:
        database = 'down'
    return Response({ 'status': 'ok', 'database': database })