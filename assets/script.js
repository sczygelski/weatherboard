

var searchbodyEl = document.querySelector("#searchbody");
var cityEl = document.querySelector("#city");
var citytitle = document.querySelector('#citytitle');
var humidityEl = document.getElementById("humidity");



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
    console.log(event);
};


//fetch coordinates
var getcoords = function(city) {
    var apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + ",USA&limit=1&appid=6c6a2773e4ad1859b9bab1adec8ab957";
    
    
    fetch(apiURL).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            var lat =  data[0].lat;
            var lon = data[0].lon;
            console.log(lat);
            console.log(lon);
            
            var weatherapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=6c6a2773e4ad1859b9bab1adec8ab957";
            
            fetch (weatherapiURL).then(function(response) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    var humidity = data.daily[0].humidity;
                    // console.log(humidity);
                    document.querySelector("#header").innerHTML = (humidity);
                    for (let i = 1; i < 6; i++) {
                        var card = document.createElement("div")
                        var date = document.createElement("h4")
                        var icon = document.createElement("p")
                        var temp = document.createElement("p")
                        var wind = document.createElement("p")
                        var humid = document.createElement("p")

                        temp.innerHTML = data.daily[i].temp.max
                        card.appendChild(temp)
                        // document.querySelector("")


                        // test.innerHTML = "taco"
                        document.querySelector(".row").appendChild(card)
                        
                        
                    }
                })


            });  

        
         }); 
    });
};
//getcoords("city");

searchbodyEl.addEventListener("submit", formSubmitHandler);