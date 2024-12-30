
        document.querySelectorAll(".allPaths").forEach(e => {
            e.setAttribute('class', `allPaths ${e.id}`);
            e.addEventListener("mouseover", function () {
                window.onmousemove=function (j) {
                    const x = j.clientX;
            const y = j.clientY + window.scrollY; 
            const nameElement = document.getElementById('name');
            nameElement.style.top = y +(-50)+ 'px';
            nameElement.style.left = x +(-30)+ 'px';
                }
                const classes=e.className.baseVal.replace(/ /g, '.')         
                document.querySelectorAll(`.${classes}`).forEach(country =>{
                    country.style.fill = "blue"
                })
                document.getElementById("name").style.opacity = 1
                
                document.getElementById("namep").innerText = e.id
            })
            e.addEventListener("mouseleave", function () {
                const classes=e.className.baseVal.replace(/ /g, '.')
                document.querySelectorAll(`.${classes}`).forEach(country =>{
                    country.style.fill = "#ececec"
                })
                document.getElementById("name").style.opacity = 0
            })

         e.addEventListener("click",function(){
                getUser(e.id)
            })
        })
        async function getUser(countryName) {
            try{
                const api_key="b1e08de129dccfbe05f8ef89f857d76a";

                const response1=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=imperial&APPID=${api_key}`);
                if (!response1.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                let response=await response1.json();
                let weather = response.weather[0].main;
        let temp = response.main.temp;
        let speed=response.wind.speed;
        let result=document.getElementById("result");
        result.textContent=`${countryName}'s Weather is ${weather}☁️.The Temperature  is ${temp}°🌡️.The wind speed is ${speed}kmph💨.`;
        
            }
            catch(error)
            {
                let result=document.getElementById("result");
                result.textContent=`Unable to fetch the data`;
            }
        }
    