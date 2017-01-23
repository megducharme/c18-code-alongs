
function toCelsius (userTemp) {
  finalTemp = Math.ceil(userTemp - 32) * (5/ 9);

  if(finalTemp <= 0){
  output.innerHTML = `<p style="color:blue">${finalTemp}<p>`;
  } else if (finalTemp >= 32){
  output.innerHTML = `<p style="color:red">${finalTemp}<p>`;
  } else {
  output.innerHTML = `<p style="color:green">${finalTemp}<p>`;
  }

}

function toFahrenheit (userTemp) {
  finalTemp = Math.ceil(userTemp * (9/ 5) + 32);

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

var clearText = document.getElementById("clear").addEventListener("click", function (event){
  tempField.value = "";
  output.innerHTML = "";
  document.getElementById('c').checked = false;
  document.getElementById('f').checked = false;
});

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


//starting on line 31 I set this one up a little differently to show the different ways to structure your event listeners. You can chain everything together like I did above, or you can break them out and call a function. Either way works!
//inside the function that fires after the click event, I simple set the values to an empty string
//for the radio buttons, they have an attribute on them called "checked" and when it's checked, it's true, and when it's not it's false. I set both to false to reset them.
//you're done! great job! :)
