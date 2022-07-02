

//6c6a2773e4ad1859b9bab1adec8ab957

// {/* <div class="card">
//   <h3 class="card-header text-uppercase">Search By User</h3>
//   <form id="user-form" class="card-body">
//     <label class="form-label" for="username">Username</label>
//     <input name="username" id="username" type="text" autofocus="true" class="form-input" />
//     <button type="submit" class="btn">Get User</button>
//   </form>
// </div> */}

var searchbodyEl = document.querySelector("searchbody");
var cityinput = document.querySelector("city");


var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
}

var city = searchbodyEl.ariaValueMax.trim();
    if (city) {
        getcoords(ciity);
        //clear content needed
    } 
    else {
        alert('No city found.')
    }

var getcoords = function() {
    //make request to URL
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=6c6a2773e4ad1859b9bab1adec8ab957').then(function(response) {
        response.json().then(function(data) {
        console.log(data);
        });
    })
};
getcoords();



searchbodyEl.addEventListener ("submit", formSubmitHandler);