/*
little chuncks, little chunks, little chunks, little chunks, little chunks, little chunks, little chunks

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history--------------------

going to need some sort of form for search input *(bootstrap/javascript/jquery?)* need to grab the current and future weather for whatever is being searched *(weather api provided in readme)* I need to store the name of the city searched in the local storage *(localStorage.setItem(,))*

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index--------- 

when i view the current weather section i see city name, date, and image that represents weather.  temp, humidity, wind speed, and uv index follow in smaller text beneath city name **(get fetch from api or pull it from storage? maybe make a variable to store current and future weather?..use postman for this?)* 

WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe---------

uv index is going to be one of three colors which will tell me the severity **(create variable for the uv index... if, else if, else statement to change the color...)*

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity-----

i need to make 5 little weather day blocks to represent the 5 day for cast this will be equal in width to above current weather row **(bootstrap cards, get fetch and a jquery or js loop that inputs info?)*


WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
(onclick we need a localStorage.GetItem() to display what we fetched earlier)
```
 */