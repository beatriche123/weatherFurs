const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();

let currentMonth = months[currentDate.getMonth()];
let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();

let current_date = document.getElementById('CurrentData');
current_date.innerHTML = `${currentMonth} ${currentHour} : ${currentMinutes}`;

function getJSON(url) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        let myObj = JSON.parse(this.responseText);
        console.log(myObj);
        let city_name = document.getElementById("CityName");
        city_name.innerHTML = myObj.name;
        let celsius = document.getElementById("chooseCelsius");
        celsius.innerHTML = Math.ceil(Number(myObj.main.temp) - 273.15);
        let wind_speed = document.getElementById("Wind");
        wind_speed.innerHTML = myObj.wind.speed;
        let CurrentDescription = document.getElementById("CurrentDescription");
        CurrentDescription.innerHTML = myObj.weather[0].description;
        let Humidity = document.getElementById("Humidity");
        Humidity.innerHTML = myObj.main.humidity;

        return myObj
    }
    xmlhttp.open("GET", url);
    //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}


function enterCity(event) {
    let get_name = document.getElementById("GiveCity");
    let city_name = document.getElementById("CityName");
    city_name.innerHTML = get_name.value;
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + get_name.value + '&appid=7a98c35a080f011e9dc6e92a9e7445c6'
    getJSON(url)

}
let search = document.getElementById("Search");
search.addEventListener("click", enterCity);



/*convert temparature*/
let chooseCelsius = document.getElementById("chooseCelsius");
var gradus = Number(chooseCelsius.innerHTML);
var celsius_select = true;

function celsius_to_fahrenheit(event) {
    if (celsius_select == false) {
        res = ((gradus + 40) * 1.8) - 40;
        chooseCelsius.innerHTML = Math.ceil(res);
        celsius_select = true;
    }
}

function fahrenheit_to_celsius(event) {
    if (celsius_select == true) {

        res = ((gradus + 40) / 1.8) - 40;
        chooseCelsius.innerHTML = Math.ceil(res);
        celsius_select = false;
    }
}
