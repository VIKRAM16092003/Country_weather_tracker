from django.shortcuts import render
from django.http import JsonResponse
import json
import requests
def home(request):
    return render(request,"template.html")
def process_path(request):
    if request.method == 'POST' :
        data=json.loads(request.body)
        country_name=data.get('country')
        api_key = "b1e08de129dccfbe05f8ef89f857d76a"
        user_input = country_name
        weather_data = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather?q={user_input}&units=imperial&APPID={api_key}")
        weather = weather_data.json()['weather'][0]['main']
        temp = round(weather_data.json()['main']['temp'])
        speed=weather_data.json()['wind']['speed']
        result=f"{user_input}'s Weather is {weather}☁️.The Temperature  is {temp}°🌡️.The wind speed is {speed}kmph💨."    
        return JsonResponse({'result': result})
    else:
        pass



