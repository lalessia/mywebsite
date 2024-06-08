from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    description = models.TextField()
    used_technologies = models.CharField(max_length=500)
    image = models.CharField(max_length=200)

    def __str__(self):
        return self.title