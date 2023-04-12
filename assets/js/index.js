
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
const currentDay = dayjs().format('MM/DD/YYYY');


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
    getForecast(lat, lon)
  

 

    })       
            

})

function getForecast(lat, lon) {

  var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)

    
   
    })       

}

function renderForecast() {

  let forecastContainer = document.getElementById('forecast');
  for (i=0; data.list.length; i+8) {
    let forecastCard = document.createElement('div');
    forecastCard.classList.add('card h-100')
    let cardBody = document.createElement('div')
    cardBody.classList.add("card-body")
    let cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    
    cardBody.append(cardTitle)
    forecastCard.append(cardBody)
    forecastContainer.append(forecastCard)
    
  } 
 
renderForecast();


  
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

