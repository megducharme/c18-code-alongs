function toCelsius (userTemp) {
  finalTemp = (userTemp-32) * (5/9);
}

function toFahrenheit (userTemp) {
  finalTemp = (userTemp * (9/ 5) + 32);
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
  if(document.getElementById('c').checked){
    console.log(userTemperature);
    toCelsius()
  }else {
    toFahrenheit()
  }
}


//9 get the vaule of the input box (user-entered temperature)
//10 target and assign the button on the DOM to a variable
//12 add an event listener to the button that will perform the conversion. Part of an event listener is what will happen when the event happens. We decided to then have it determine which converstion to run - either C or F
//14 grab the input field from the DOM and store it in a variable
//15 add an event listener to the input field, and assing it a function to fire once the event happens
//16 the function that fires once the keypress event is detected
//18 checking which key was pressed, and if it was 13, or the enter key, then execute the determineConverter function, and pass along the event
//23 determine converter function - check if the C readio button was checked, and if so run the toCelsius funtion, if not then the F must have been clicked, so run the toFahrenheit funtion. To be more specific, we could check for the f to be checked, and if it's not alert the user to select a converstion to be done
