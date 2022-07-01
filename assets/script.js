// var getUserRepos = function() {
//     fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}")
// }

// const q= "Madison, WI"

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

var getUserRepos = function() {
    var getlatlong = "http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1586468027&appid={API key}";
    fetch(getlatlong).then(function(response) {
        response.json().then(function(data){
            console.log(data);
        });
    });
};