document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure";

const API_KEY = "b6dd7e868af78718453568149387fb94";

function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b6dd7e868af78718453568149387fb94`
  )
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weatherInfo");
      const weatherIcon = document.querySelector(".weatherIcon");
      const weatherIconImg = document.querySelector(".weatherIcon img");
      const weatherIconAdr = `http://openweathermap.org/img/wn/10d@2x.png`;
      weatherIcon.innerText = data.name;
      weather.innerText = `${Math.round(Number(data.main.temp) - 273.15)}°C `;
      weatherIconImg.setAttribute("src", weatherIconAdr);
    });
}

function onGeoError() {
  alert("Can't find you. No wather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// $(document).ready(function() {
//   let weatherIcon = {
//     '01' : 'fas fa-sun',
//     '02' : 'fas fa-cloud-sun',
//     '03' : 'fas fa-cloud',
//     '04' : 'fas fa-cloud-meatball',
//     '09' : 'fas fa-cloud-sun-rain',
//     '10' : 'fas fa-cloud-showers-heavy',
//     '11' : 'fas fa-poo-storm',
//     '13' : 'far fa-snowflake',
//     '50' : 'fas fa-smog'
//   };

// $.ajax({
// url:'http://api.openweathermap.org/data/2.5/weather?q=도시이름&APPID=회원가입후 받은 키 값&units=metric',

// dataType:'json',
// type:'GET',
// success:function(data){
//   var $Icon = (data.weather[0].icon).substr(0,2);
//   var $Temp = Math.floor(data.main.temp) + 'º';
//   var $city = data.name;

//   $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] +'"></i>');
//   $('.CurrTemp').prepend($Temp);
//   $('.City').append($city);
//   }
// })
// });
