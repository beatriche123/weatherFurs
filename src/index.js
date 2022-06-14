const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
currentDate = new Date();

let currentMonth = months[currentDate.getMonth()];
let currentHour = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();

current_date = document.getElementById('CurrentData');
current_date.innerHTML = `${currentMonth} ${currentHour} : ${currentMinutes}`;


function enterCity(event) {
    let city_name = document.getElementById("CityName");
    city_name.innerHTML = searchCity.value;
}
let search = document.getElementById("Search");
search.addEventListener("click", enterCity);



/*convert temparature*/
chooseCelsius = document.getElementById("chooseCelsius");
gradus = Number(chooseCelsius.innerHTML);
celsius_select = true;

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

let celsius = document.getElementById("celsius-link");
celsius.addEventListener("click", celsius_to_fahrenheit);
let fahrenheit = document.getElementById("fahrenheit-link");
fahrenheit.addEventListener("click", fahrenheit_to_celsius);