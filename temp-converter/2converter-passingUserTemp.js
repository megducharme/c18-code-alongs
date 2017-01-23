function toCelsius (userTemp) {
  console.log("userTemp in C function", userTemp);
  finalTemp = Math.ceil(userTemp - 32) * (5/ 9);
  console.log("finalTemp", finalTemp);
}

function toFahrenheit (userTemp) {
  console.log("userTemp in F function", userTemp)
  finalTemp = Math.ceil(userTemp * (9/ 5) + 32);
}

var userTemperature = document.getElementById("tempField").value
var button = document.getElementById("converter");

button.addEventListener("click", determineConverter);

var tempInput = document.getElementById("tempField");
tempInput.addEventListener("keypress", pressed);
function pressed(e) {
  console.log("event", e);
    if (e.keyCode === 13) {
      determineConverter(e)
    }
}

function determineConverter(clickEvent) {
  var userTemp = document.getElementById("tempField").value

  if(document.getElementById('c').checked){
    toCelsius(userTemp)
  }else if (document.getElementById('f').checked) {
    toFahrenheit(userTemp)
  }else {
    alert("Please select a converstion");
  }
}

//first thing I did was move the userTemp variable into the determineConverter function to make it avalibale in the scope of that function. If I tried to pass it to the functions on 27 and 29, it would be undefined. If this is confusing, google "function scope javascript"
//once I had that avaliable I was able to pass it along (lines 27 and 29)
//remember that our functions on 1 and 5 do not need to accept "userTemp", we can name that parameter anything we want.
//I threw a console.log in on line 2 and 7 to make sure the number was getting into the function the way I wanted it to. Console long is your friend! (I use this more than the debugger as I code)
//This is not necessary, only another thing to consider, but I added in the if statement on 29 to alert the user if they have not selected a button
//lastly I added Math.ceil because my console.log("finalTemp", finalTemp) was giving a huge decimal. I decided to round it up to get a whole number.
//cool! now we have converted the temps!
