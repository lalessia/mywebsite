import json
from django.contrib.staticfiles import finders
import os
from django.conf import settings
from django.shortcuts import render, get_object_or_404, redirect
from .models import Project, Topic
from .forms import ProjectForm


def home(request):
    json_file_path = '/static/vendor/particlejs/particlesjs-config.json'

    json_file_path = finders.find('vendor/particlejs/particlesjs-config.json')

     # Leggi il file JSON
    with open(json_file_path, 'r') as file:
        data = json.load(file)
    
    # Passa il contenuto del file JSON al template come stringa
    context = {
        'json_data': json.dumps(data)  # Converti i dati JSON in una stringa JSON
    }

    projects = Project.objects.all()

    context['projects'] = projects

    print('projects:', projects)

    return render(request, 'portfolio/home.html', context)

def about(request):
    return render(request, 'portfolio/about.html')

'''
def portfolio(request):
    return render(request, 'portfolio/portfolio.html')
'''

def contact(request):
    return render(request, 'portfolio/contact.html')

def portfolio(request):
    projects = Project.objects.all()
    print('projects:', projects)
    for p in projects:
        print('Project:', p.title)  # Stampa il titolo del progetto
        print('Topic:', p.topic)    # Stampa il topic del progetto

    return render(request, 'portfolio/portfolio.html', {'projects': projects})

def project_list(request):
    projects = Project.objects.all()
    return render(request, 'portfolio/project_list.html', {'projects': projects})

def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    return render(request, 'portfolio/project_detail.html', {'project': project})

def project_create(request):
    if request.method == "POST":
        form = ProjectForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('project_list')
    else:
        form = ProjectForm()
    return render(request, 'portfolio/project_form.html', {'form': form})

def project_update(request, pk):
    project = get_object_or_404(Project, pk=pk)
    if request.method == "POST":
        form = ProjectForm(request.POST, instance=project)
        if form.is_valid():
            form.save()
            return redirect('project_list')
    else:
        form = ProjectForm(instance=project)
    return render(request, 'portfolio/project_form.html', {'form': form})

def project_delete(request, pk):
    project = get_object_or_404(Project, pk=pk)
    if request.method == "POST":
        project.delete()
        return redirect('project_list')
    return render(request, 'portfolio/project_confirm_delete.html', {'project': project})
