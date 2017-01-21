var output = document.getElementById("output-target")
var userTemperature = document.getElementById("tempField").value
var button = document.getElementById("converter");
var tempInput = document.getElementById("tempField");

button.addEventListener("click", determineConverter);

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


var clearText = document.getElementById("clear").addEventListener("click", function (event){
  tempField.value = "";
  output.innerHTML = "";
  document.getElementById('c').checked = false;
  document.getElementById('f').checked = false;
});



//finally I made this file to show you how I would clean it up as to make it more readable for another dev, or for myself revisiting this project later
//I put the variables at the top of the file so they are easy to find, and then I tried to put the code in order of execution
