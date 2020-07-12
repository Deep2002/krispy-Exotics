from django.db import models
from django.utils import timezone


class Post(models.Model):
    added_date = models.DateTimeField(auto_now=True)
    car_name = models.CharField(max_length=30)
    image = models.ImageField(upload_to="images/")

    def get_image(self):
        if self.image and hasattr(self.image, 'url'):
            return self.image.url
        else:
            return '/static/images'
