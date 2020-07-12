from django.shortcuts import render
from django.http import HttpResponse

from django.utils import timezone

from .models import Post


def home(request):
    images = Post.objects.all().order_by("-added_date")
    return render(request, 'main/index.html', {'images': images})
