import json
from django.shortcuts import render

def home(request):
    json_file_path = './static/vendor/particlejs/particlesjs-config.json'
     # Leggi il file JSON
    with open(json_file_path, 'r') as file:
        data = json.load(file)
    
    # Passa il contenuto del file JSON al template come stringa
    context = {
        'json_data': json.dumps(data)  # Converti i dati JSON in una stringa JSON
    }
    return render(request, 'portfolio/home.html', context)

def about(request):
    return render(request, 'portfolio/about.html')

def portfolio(request):
    return render(request, 'portfolio/portfolio.html')

def contact(request):
    return render(request, 'portfolio/contact.html')
