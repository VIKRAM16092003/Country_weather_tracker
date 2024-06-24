from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    import requests

    api_key = "b1e08de129dccfbe05f8ef89f857d76a"
    
    user_input = 'Australia'
    
    weather_data = requests.get(
        f"https://api.openweathermap.org/data/2.5/weather?q={user_input}&units=imperial&APPID={api_key}")
    
    if weather_data.json()['cod'] == '404':
        print("No City Found")
    else:
        weather = weather_data.json()['weather'][0]['main']
        temp = round(weather_data.json()['main']['temp'])
        humidit= round(weather_data.json()['main']['humidity'])
    
    
        
        
    return render(request,"home.html",{'weather':weather,'temp':temp,'humidity':humidit})