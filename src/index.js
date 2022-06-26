let chooseCelsius = document.getElementById("chooseCelsius");
var gradus = Number(chooseCelsius.innerHTML);
var celsius_select = true;
currect_gradus = chooseCelsius.innerHTML;

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
        currect_gradus = Math.ceil(Number(myObj.main.temp) - 273.15);
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
function celsius_to_fahrenheit(event) {
    if (celsius_select == false) {
        currect_gradus = (currect_gradus * (9 / 5)) + 32
        chooseCelsius.innerHTML = Math.ceil(currect_gradus);
        celsius_select = true;
    }
}

function fahrenheit_to_celsius(event) {
    if (celsius_select == true) {
        currect_gradus = (currect_gradus - 32) * (5 / 9)
        chooseCelsius.innerHTML = Math.ceil(currect_gradus);
        celsius_select = false;
    }
}


let celsius = document.getElementById("celsius-link");
celsius.addEventListener("click", celsius_to_fahrenheit);
let fahrenheit = document.getElementById("fahrenheit-link");
fahrenheit.addEventListener("click", fahrenheit_to_celsius);
