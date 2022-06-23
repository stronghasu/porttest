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
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
