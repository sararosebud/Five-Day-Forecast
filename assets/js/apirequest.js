// const apiKey = '976a68c72902bf9ad934e239ce2e5e99'
// // const url = 'http://api.openweathermap.org/geo/1.0/direct?q={userInput},&appid={apiKey}'

// var searchButton = document.getElementById('searchButton')
// var userInput = document.getElementById('userInput')

// searchButton.addEventListener('click', function() {
//     console.log('searchbuttonclicked')

// })

// function getApi() {
//     // fetch request gets a list of all the repos for the node.js organization
//     var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={976a68c72902bf9ad934e239ce2e5e99}';
  
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data)
//         //Loop over the data to generate a table, each table row will have a link to the repo url
//         for (var i = 0; i < data.length; i++) {
//           // Creating elements, tablerow, tabledata, and anchor
//           var createTableRow = document.createElement('tr');
//           var tableData = document.createElement('td');
//           var link = document.createElement('a');
  
//           // Setting the text of link and the href of the link
//           link.textContent = data[i].html_url;
//           link.href = data[i].html_url;
  
//           // Appending the link to the tabledata and then appending the tabledata to the tablerow
//           // The tablerow then gets appended to the tablebody
//           tableData.appendChild(link);
//           createTableRow.appendChild(tableData);
//           tableBody.appendChild(createTableRow);
//         }
//       });
//   }
  
//   searchButton.addEventListener('click', getApi);



// //  window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
// //  window.myWidgetParam.push({id: 1,cityid: '2643743',appid: '976a68c72902bf9ad934e239ce2e5e99',units: 'imperial',containerid: 'openweathermap-widget-1',  });
// //    (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
// //    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  

// // })();