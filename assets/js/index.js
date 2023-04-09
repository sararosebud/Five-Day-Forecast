
const apiKey = "976a68c72902bf9ad934e239ce2e5e99"
var searchBtn = document.getElementById('searchButton');
var city;
var temp;
var input = document.getElementById('userInput')
const weatherResult = document.getElementById('weatherResult')



var today = dayjs();
$('').text(today.format('MMM D, YYYY'));




searchBtn.addEventListener('click', e => {
    e.preventDefault()
    console.log('search button clicked')
    

    let inputVal = input.value

        
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial`

    fetch(url)
    .then(response => response.json())
    .then(data => {
       console.log(data)

    
      
        
    addElement();

    function addElement() {

        

        var cityName = (data.name)
        // var currentDate = (data.
        var cityWeather = (data.main.temp)
      // create a new div element
      const currentDay = dayjs().format('MM/DD/YYYY');
      
    
      // and give it some content
      const currentDayContent = document.createTextNode( cityName + " (" + currentDay + ")" + "   " + cityWeather + " ");
    
      // add the text node to the newly created div
      weatherResult2.appendChild(currentDayContent);
    
    
    }

    })       
            

})





