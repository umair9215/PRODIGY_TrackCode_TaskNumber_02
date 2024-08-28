const apiKey = "0f592b18c6f5c614017e46252e2412c2";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".searchBox input"); 
      const searchBtn = document.querySelector(".searchBox button"); 

      const weatherIcon = document.querySelector(".weatherIcon"); 

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();
            

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


            if (data.weather[0].main == "Clouds"){
                weatherIcon.src = "./Images/cloudy.png";
            }
            else if (data.weather[0].main == "Clear"){
                weatherIcon.src = "./Images/sunny.png";
            }
            else if (data.weather[0].main == "Rain"){
                weatherIcon.src = "./Images/rainy.png";
            }
            else if (data.weather[0].main == "Drizzle"){
                weatherIcon.src = "./Images/sunny-rainy.png";
            }
            else if (data.weather[0].main == "Mist"){
                weatherIcon.src = "./Images/cloudy-sunny.png";
            }


            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }

           
        }

        searchBtn.addEventListener("click", ()=> {
            checkWeather(searchBox.value);
        });
