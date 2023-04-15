
const apiKey = "976a68c72902bf9ad934e239ce2e5e99"
var searchBtn = document.getElementById('searchButton');
var city;
var temp;
var input = document.getElementById('userInput')
const weatherResult = document.getElementById('weatherResult')



var today = dayjs();
$('').text(today.format('MMM D, YYYY'));

function addElement(data) {        

  var cityName = (data.name)
  // var currentDate = (data.
  var cityWeather = (data.main.temp)
// create a new div element
const currentDay = today.format('MM/DD/YYYY');


// and give it some content
const currentDayContent = document.createTextNode( "The Weather In: " + cityName + " (" + currentDay + ")" + "   " + cityWeather + " ");

// add the text node to the newly created div
weatherResult2.appendChild(currentDayContent);


}


searchBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log('search button clicked')
    

    let inputVal = input.value

        
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`

    fetch(url)
    .then(response => response.json())
    .then(data => {
       
       console.log(data.coord.lat, data.coord.lon)
       var lat = data.coord.lat;
       var lon = data.coord.lon;


    
      
        
    addElement(data);
    getForecast(lat, lon);
  

 

    })       
            

})

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
  // forecastContainer.textContent = 'test'
  console.log("forecast console")

  console.log(data);
  
  for (i=0; data.list.length; i+=8) {
    let forecastCard = document.createElement('div');
    forecastCard.classList.add('card')
    let cardBody = document.createElement('div')
    cardBody.classList.add("card-body")
    let cardTitle = document.createElement('h5')

    let fiveDayDate = data.list[i].dt_txt
    let formattedDate = dayjs(fiveDayDate).format('ddd MMM D, YYYY');
cardTitle.textContent = formattedDate;
   
    
  


    cardTitle.classList.add('card-title')

    // cardTitle.textContent = fiveDayDate


    let humidityEl = document.createElement('p');
    humidityEl.textContent = 'Humidity'+ " " +  data.list[i].main.humidity

    let temperatureEl = document.createElement('p');
    temperatureEl.textContent = 'Temperature:' + " " + data.list[i].main.temp

    let pressureEl = document.createElement('p');
    pressureEl.textContent = "Pressure:" + " " + data.list[i].main.pressure

    let iconEl = document.createElement('img');
    iconEl.innerHTML = data.list[i].weather.icon

   


    cardBody.append(cardTitle)

    cardBody.append(temperatureEl);
    cardBody.append(humidityEl);
    cardBody.append(pressureEl);
    cardBody.append(iconEl)
    
    
    forecastCard.append(cardBody)
    forecastContainer.append(forecastCard)
    
  } 
 
}



// // Wait for document to load
// $(document).ready(() => {
//   $('.input-group').on('submit', () => {

//       // prevents default behaviour
//       // Prevents event propagation
//       return false;
//   });
// });

// $('.input-group').keypress((e) => {

//   // Enter key corresponds to number 13
//   if (e.which === 13) {
//       $('.input-group').submit();
//       console.log('form submitted');
      
     
//   }
// })

