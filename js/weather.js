const API_KEY ="f2d9d23de5ddc32f62315dfeb065d768";

function onGeoOk(position){
    const lat = position.coords.latitude; // 위도(가로)와 경도(세로)
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` // units=metric will change F to C in weather
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}`;
        });
}

function onGeoError() {
    alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

