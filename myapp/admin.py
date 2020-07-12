from django.contrib import admin
from .models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ('car_name', 'image')


admin.site.register(Post, PostAdmin)
