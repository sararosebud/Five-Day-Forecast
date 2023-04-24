
const apiKey = "976a68c72902bf9ad934e239ce2e5e99"
var searchBtn = document.getElementById('searchButton');
var city;
var temp;
var input = document.getElementById('userInput')
const weatherResult = document.getElementById('weatherResult')
var cityList = document.getElementById("savedCities")
var today = dayjs();
$('').text(today.format('MMM D, YYYY'));
let savedCities;





function addElement(data) {        

  var cityName = (data.name)
  var dayOneTemp = (data.main.temp)
  var dayOneHumidity = data.main.humidity
  var dayOnePressure = data.main.pressure
 

// current day container with information that populates with the day's weather
const currentDay = today.format('MM/DD/YYYY');

console.log(data)
//Content that goes into the container
const currentDayTitle = document.createElement('h5')
currentDayTitle.classList.add('card-body')
currentDayTitle.textContent = "The Weather In" + ' ' + cityName
// body of card to hold all of the weather information
const cdCardBody = document.createElement('div');
cdCardBody.classList.add("card-body")

// today's date
const currentDate = document.createElement('p');
currentDate.textContent = currentDay;
// today's temperature
const currentTemp = document.createElement('p');
currentTemp.classList.add("card-body")
currentTemp.textContent = "Temperature:" + " " + dayOneTemp + "°" + "F"
// today's humidity
const currentHumidity = document.createElement('p');
currentHumidity.classList.add('card-body');
currentHumidity.textContent = "Humidity: " + " " + dayOneHumidity + "%"
// today's pressure
const currentPressure = document.createElement('p');
currentPressure.classList.add('card-body');
currentPressure.textContent = "Pressure: " + " " + dayOnePressure



// appending all of the created elements to the card body and weather container
weatherResult.appendChild(cdCardBody);
cdCardBody.appendChild(currentDayTitle);
cdCardBody.appendChild(currentDate);
cdCardBody.appendChild(currentTemp);
cdCardBody.appendChild(currentHumidity);
cdCardBody.appendChild(currentPressure);


}




function clearWeatherResult() {

  weatherResult.innerHTML = "";
  document.getElementById('forecast').innerHTML = "";
  cityList.innerHTML = "";

}


function fetchURL() {

  let inputVal = input.value
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`
  fetch(url)
  .then(response => response.json())
  .then(data => {
  
 
     let lat = data.coord.lat;
     let lon = data.coord.lon;
 
      
     addElement(data);
     getForecast(lat, lon);

     saveCities(inputVal);
     renderSavedCities();
 
});     
}

function saveCities(inputVal) {

   // Save the city to local storage
  savedCities = JSON.parse(localStorage.getItem("savedCities")) || [];

 console.log(savedCities)
 if (!savedCities.includes(inputVal)) 
  {
   savedCities.push(inputVal);
 }
 localStorage.setItem("savedCities", JSON.stringify(savedCities));
}

function renderSavedCities() {
 

  for (i=0; i < savedCities.length; i++) {
    let cityButton = document.createElement('button');
    cityButton.textContent = savedCities[i];
    
    cityList.appendChild(cityButton);


  }}

cityList.addEventListener('click', function(e) {

clearWeatherResult();
 let buttonInfo = e.target.textContent
 
 recentSearches(buttonInfo);
 
}
)

function recentSearches(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  fetch(url)
  .then(response => response.json())
  .then(data => {
  
 
     let lat = data.coord.lat;
     let lon = data.coord.lon;
 
      
     addElement(data);
     getForecast(lat, lon);

     saveCities(city);
     renderSavedCities();
    }); 

}


  


// search button to find city and populate weather forecast

searchBtn.addEventListener('click', e => {
    e.preventDefault()
    
      fetchURL();   
      
      // Clear the contents of weatherResult and forecast containers      
      clearWeatherResult();     
      input.value = "";
        
})

// call/fetch a five day forecast from openweathermap api

function getForecast(lat, lon) {

  var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`

  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      renderForecast(data);
      console.log(data)

    })       

}

function renderForecast(data) {

   

  let forecastContainer = document.getElementById('forecast');
  
  console.log("forecast console")

  console.log(data);


  
  for (i=0; data.list.length; i+=8) {
    let forecastCard = document.createElement('div');
    forecastCard.classList.add('card')
    let cardBody = document.createElement('div')
    cardBody.classList.add("card-body")
    let cardTitle = document.createElement('h5')
    let cardImage = document.createElement('img')

    let iconURL = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
    cardImage.classList.add('custom-img')
    cardImage.setAttribute('src', iconURL)

    let fiveDayDate = data.list[i].dt_txt
    let formattedDate = dayjs(fiveDayDate).format('ddd MMM D, YYYY');

    cardTitle.textContent = formattedDate;     
    cardTitle.classList.add('card-title')

  


    let humidityEl = document.createElement('p');
    humidityEl.textContent = 'Humidity'+ " " +  data.list[i].main.humidity + "%"

    let temperatureEl = document.createElement('p');
    temperatureEl.textContent = 'Temperature:' + " " + data.list[i].main.temp + "°" + "F"

    let pressureEl = document.createElement('p');
    pressureEl.textContent = "Pressure:" + " " + data.list[i].main.pressure

  

    cardBody.append(cardTitle);
    cardBody.append(cardImage);
   

    cardBody.append(temperatureEl);
    cardBody.append(humidityEl);
    cardBody.append(pressureEl);
    
    
    
    forecastCard.append(cardBody)
    forecastContainer.append(forecastCard)
    
  } 
 
}



