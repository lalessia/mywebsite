from django import forms
from .models import Project

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ['title', 'topic', 'subtopic', 'description', 'link_repository', 'image', 'tech', 'other_tech']
