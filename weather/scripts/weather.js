function RequestWeather(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Data:', data);
            document.querySelector('.js--city').textContent = 'Город: ' + data.name;
            document.querySelector('.js--temp').innerHTML = 'Погода: ' +  Math.floor(data.main.temp) + ' &deg'+' C';
            document.querySelector('.js--pressure').textContent = 'Давление: ' + data.main.pressure + ' hPa';
            document.querySelector('.js--description').textContent = 'Описание: ' + data.weather[0].description;
            document.querySelector('.js--humidity').textContent = 'Влажность: ' + data.main.humidity + ' %';
            document.querySelector('.js--speed').textContent = 'Скорость ветра: ' + data.wind.speed + ' m/s';
            document.querySelector('.js--deg').innerHTML = 'Направление: ' + data.wind.deg + ' &deg';
            document.querySelector('.js--icon').innerHTML = '<img src="https://openweathermap.org/img/w/' + data.weather[0].icon + '.png"/>'
                return data;
        })
}
new RequestWeather('https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(result => console.log('Result: ', result))
    .catch(error => console.error('Ошибка', error));

