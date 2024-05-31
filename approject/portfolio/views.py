from django.shortcuts import render

def home(request):
    return render(request, 'portfolio/home.html')

def about(request):
    return render(request, 'portfolio/about.html')

def portfolio(request):
    return render(request, 'portfolio/portfolio.html')

def contact(request):
    return HttpResponse("<h1>Ciao a tutti! Sono la pagina contact</h1>")


