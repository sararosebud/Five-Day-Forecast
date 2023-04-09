const apiKey = "976a68c72902bf9ad934e239ce2e5e99"
var searchBtn = document.getElementById('searchButton');
var city;
var temp;
var input = document.getElementById('userInput')
const weatherResult = document.getElementById('weatherResult')






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
        var cityWeather = (data.main.temp)
      // create a new div element
      const newDiv = document.createElement("ul");
    
      // and give it some content
      const newContent = document.createTextNode("The Current Weather in " + cityName + " is " + cityWeather + "! ");
    
      // add the text node to the newly created div
      weatherResult.appendChild(newContent);
    
      // add the newly created element and its content into the DOM
      const currentDiv = document.getElementById("div1");
      document.body.insertBefore(newDiv, currentDiv);
    }

    })       
            

})





function addElement() {

    var cityName = (data.name)
    var cityWeather = (data.main.temp)
  // create a new div element
  const newDiv = document.createElement("ul");

  // and give it some content
  const newContent = document.createTextNode("The Current Weather in" + cityName + "is" + cityWeather + "!");

  // add the text node to the newly created div
  weatherResult.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}