// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const appkey = '4007973eb69e6236f1e0f43d711191b1';
// url for Weather endpoint
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?id=3448439&units=imperial&appid=' + appkey;
// url for Forecast endpoint
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?id=3448439&units=imperial&appid=' + appkey;

function displayWeather(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }

  function displayForecast(data) {
    function displayDay(dt, temp, dayElement, tempElement) {
      const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
      const forecastDate = new Date(dt * 1000);
      dayElement.textContent = weekday[forecastDate.getDay()];
      tempElement.innerHTML = `${temp}&deg;F`; 
    }
    const forecastList = data.list;
    displayDay(forecastList[8].dt, forecastList[8].main.temp, document.querySelector('#first-day'), document.querySelector('#first-temp'));
    displayDay(forecastList[16].dt, forecastList[16].main.temp, document.querySelector('#second-day'), document.querySelector('#second-temp'));
    displayDay(forecastList[24].dt, forecastList[24].main.temp, document.querySelector('#third-day'), document.querySelector('#third-temp'));

  }

async function apiFetch() {
    try {
      const response = await fetch(urlWeather);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // testing only
        displayWeather(data); 
      } else {
          throw Error(await response.text());
      }

      const responseForecast = await fetch(urlForecast);
      if (responseForecast.ok) {
        const dataForecast = await responseForecast.json();
        // console.log(dataForecast); // testing only
        displayForecast(dataForecast); 
      } else {
          throw Error(await responseForecast.text());
      }

    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
