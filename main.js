
// little chuncks, little chunks, little chunks, little chunks, little chunks, little chunks, little chunks





document.querySelector("#search-form").addEventListener("submit", function (event) {

    event.preventDefault()
    var selectedCity = document.querySelector("#search-term").value
    console.log(selectedCity);
    weatherSearch(selectedCity)
});



// --------------------
// THEN I am presented with current and future conditions for that city

// var APIKEY= "blah, blah, blah"

// function searchWeatherOfCity(searchValue) 

var APIKEY = "1ab5d5fb108148020574fbedf5d8f664";

// `http://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=${APIKEY}`;

function weatherSearch(selectedCity) {

    var apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${APIKEY}`;

    fetch(apiUrl)

        .then(function (response) {

            if (response.ok) {
                return response.json()
            } else {
                alert(`error: ${response.statusTest}`)
            }
        }) 
        .then(function(data){


        // var title=documentCreateElement("div").create a div, add a class (for css).textContent(data.name)...;
        // var temp=create a p
        // var humidity=
        // var wind=
        // var img=

        // var card =
        // var cardBody=

        // title.append(img)
        // carBody.append(title, temp, humidity, wind)
        // card.append(cardBody)
        // document.querySelector("#??").append(card)


        })

}



//     .then(function(data){

//         //this is where you have to look through the data object and decide what information you want, how to access it (data.name? data.weather[0].icon?)

//         //decide how you want it to look on your HTML... use jquery to creat elements, add attributes and classes to those elements and write text into the elements using the data that came back and append it to some place on your html...

//         //two more functions with api calls you need to write!
//         fiveDayForecast(searchValue)
//         UvIndexValue(data.coord.latl, data.coord.long)
//     })



// }
// --------------------

// And that city is added to the search history--------------------

// * need to grab the current and future weather for whatever is being searched *(weather api provided in readme)* I need to store the name of the city searched in the local storage *(localStorage.setItem(,))*

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index--------- 

// when i view the current weather section i see city name, date, and image that represents weather.  temp, humidity, wind speed, and uv index follow in smaller text beneath city name **(get fetch from api... var date and time to hold briefly before inserting into the dom?)* 

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe---------

// uv index is going to be one of three colors which will tell me the severity **(create variable for the uv index... if, else if, else statement to change the color...)*

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity-----

// i need to make 5 little weather day blocks to represent the 5 day for cast this will be equal in width to above current weather row **(bootstrap cards, get fetch and a jquery or js loop that inputs info?)*


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// (onclick we need a localStorage.GetItem() to display what we fetched earlier)
