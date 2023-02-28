from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
def list(request):
    print(request)
    return JsonResponse({})