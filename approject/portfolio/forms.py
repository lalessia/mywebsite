from django import forms
from .models import Project

class ProjectForm(forms.ModelForm):
    image_file = forms.FileField(required=False)
    
    class Meta:
        model = Project
        fields = ['title', 'subtitle', 'description', 'used_technologies', 'image']
