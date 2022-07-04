

// var searchbodyEl = document.querySelector("#searchbody");
// var cityEl = document.querySelector("#city");


// //submite button works with this
// var formSubmitHandler = function(event) {
//     event.preventDefault();
//     console.log(event);
// }


//get arrey for coordinates
// var getcoords = function(city) {
//     //searchbodyEl.addEventListener ("submit", formSubmitHandler);
//     // var city1 = () => {
//     //     let inputValue=cityEl.innerText;
//     //     //document.getElementById("citytitle").innerHTML=inputValue;
//     //     console.log(inputValue)
//     //}
//     inputValue = "Chicago";
//     //make request to URL
//     fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + inputValue + '&limit=1&appid=6c6a2773e4ad1859b9bab1adec8ab957').then(function(response) {
//         response.json().then(function(data) {
//            console.log(data);
//         });
//     })
//     // var cityobject = data[0];
//     // var lat = cityobject.lat;
//     // var long = cityobject.long;
// };
// getcoords();

// var response = fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=6c6a2773e4ad1859b9bab1adec8ab957');
// console.log(response);


// var formSubmitHandler = function(event) {
//     event.preventDefault();
// }

// function getcities (){
//     let inputValue = document.getElementsByClassName("citytitle")[1].value;
//     document.getElementById("city").innerHTML=inputValue;
//     console.log(inputValue)
// }

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
    console.log(event);
};


//fetch coordinates
var getcoords = function(city) {
    var apiURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + ",USA&limit=5&appid=6c6a2773e4ad1859b9bab1adec8ab957";

    fetch(apiURL).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });
};
getcoords("city");

searchbodyEl.addEventListener("submit", formSubmitHandler);
