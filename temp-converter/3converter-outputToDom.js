
function toCelsius (userTemp) {
  finalTemp = Math.ceil((userTemp-32) * (5/9));

  if(finalTemp <= 0){
  output.innerHTML = `<p style="color:blue">${finalTemp}<p>`;
  } else if (finalTemp >= 32){
  output.innerHTML = `<p style="color:red">${finalTemp}<p>`;
  } else {
  output.innerHTML = `<p style="color:green">${finalTemp}<p>`;
  }

}

function toFahrenheit (userTemp) {
  finalTemp = Math.ceil((userTemp+32) * (9/5));

  if(finalTemp <= 32){
  output.innerHTML = `<p style="color:blue">${finalTemp}<p>`;
  } else if (finalTemp >= 90){
  output.innerHTML = `<p style="color:red">${finalTemp}<p>`;
  } else {
  output.innerHTML = `<p style="color:green">${finalTemp}<p>`;
  }
}

var output = document.getElementById("output-target")
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


//First I had to target where I wanted to output to the DOM. I checked the Index for the id we gave that div and targeted it with getElementById. (line 27)
//I used string interpolation to output to the DOM. This means that I was able to encapsulate everyting with back ticks (the one on the top left of your keyboard) and insert variables with ${}
//I added some if statements to separate the different temperature ranges
//Finally I added inline styling to change the color. You can also add a class and do this in your CSS, whatever you're most comfortable with right now.
//check it out! it works!
