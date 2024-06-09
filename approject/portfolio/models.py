from django.db import models

class Topic(models.Model):
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.description

class Project(models.Model):
    title = models.CharField(max_length=200)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    subtopic = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField()
    link_repository = models.URLField()
    image = models.CharField(max_length=200, blank=True, null=True)
    tech = models.CharField(max_length=200)
    other_tech = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return self.title
