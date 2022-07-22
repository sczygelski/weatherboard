

var searchbodyEl = document.querySelector("#searchbody");
var cityEl = document.querySelector("#city");





//submit handler
var formSubmitHandler = function(event) {
    event.preventDefault();
    var city = cityEl.value.trim();
        if (city) {
            getcoords(city);
            cityEl.value= " ";
        }
        else {
            alert("Please enter a valid US city"); 
        }
};


//fetch coordinates
var getcoords = function(city) {
    var apiURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + ",USA&limit=1&appid=6c6a2773e4ad1859b9bab1adec8ab957";
    
    
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            var lat =  data[0].lat;
            var lon = data[0].lon;
            var name = document.querySelector("#citytitle")
            var curdate = moment().format('YYYY-MM-DD')
            name.innerHTML = data[0].name + ", " + data[0].state + ":      " + curdate;
            
            //fetch weather from coordinates
            var weatherapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=6c6a2773e4ad1859b9bab1adec8ab957";          
            fetch (weatherapiURL).then(function(response) {
                response.json().then(function(data) {
                    console.log(data)
                    //current day
                    var temperature = data.daily[0].temp.max
                    document.querySelector("#temperature").innerHTML = "Temperature: " + temperature + " Kelvin"



                    //var pic = document.createElement("img")
                    var pic = document.getElementById("icon");

                    pic.src  = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png";
                    console.log(pic)

                    //pics.innerHTML = pic.src

                    
                    var gusty = data.daily[0].wind_speed
                    document.querySelector("#gusty").innerHTML = "Wind: " + gusty + " MPH"
                    var humidity = data.daily[0].humidity;
                    document.querySelector("#humidity").innerHTML = "Humidity: " + humidity + " %";
                    var UV = data.daily[0].uvi
                    document.querySelector("#UV").innerHTML = "UV Index: " + UV
                    var UVnum = data.daily[0].uvi.innerHTML
                    var UVEl = document.querySelector("#UV")

                    if (UVEl >= 6) {
                        UVElclassList.add("high")
                    }
                    else if (UVEl <= 2) {
                        UVEl.classList.add("low")
                    }
                    else {
                        UVEl.classList.add("med")
                    }

                    //for 5 day forecast
                    for (let i = 1; i < 6; i++) {
                        var card = document.createElement("div")
                        var icon = document.createElement("img")
                        var temp = document.createElement("p")
                        var wind = document.createElement("p")
                        var humid = document.createElement("p")
                        var days = document.createElement("h4")
                        //temperature
                        temp.innerHTML = "Temperature: " + data.daily[i].temp.max + " Kelvin"
                        card.appendChild(temp)
                        //icon
                        var iconsEl = document.querySelector("#iconUrl")
                        icon.src = "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png";
                        card.appendChild(icon)
                        //wind
                        wind.innerHTML = "Wind: " + data.daily[i].wind_speed + " MPH"
                        card.appendChild(wind) 
                        //humidity
                        humid.innerHTML = "Humidity: " + data.daily[i].humidity + " %"
                        card.appendChild(humid)                        
                        card.classList.add("cardclass");
                        document.querySelector(".row").appendChild(card)
                    }
                })


            });  

        
         }); 
    });
};
//getcoords("city");

searchbodyEl.addEventListener("submit", formSubmitHandler);