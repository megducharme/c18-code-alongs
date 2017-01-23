var output = document.getElementById("output-target")
var tempInput = document.getElementById("tempField")
var button = document.getElementById("converter");
var celBtn = document.getElementById("c");
var farBtn = document.getElementById("f");
var clearText = document.getElementById("clear");

button.addEventListener("click", determineConverter);

tempInput.addEventListener("keypress", pressed);
function pressed(e) {
  console.log("event", e);
    if (e.keyCode === 13) {
      determineConverter()
    }
}


function determineConverter() {
  var userTemp = tempInput.value

  if(celBtn.checked){
    toCelsius(userTemp)
  }else if (farBtn.checked) {
    toFahrenheit(userTemp)
  }else {
    alert("Please select a converstion");
  }
}


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
  console.log("usertemp", userTemp)
  finalTemp = Math.ceil(userTemp * (9/ 5) + 32);

  if(finalTemp <= 32){
  output.innerHTML = `<p style="color:blue">${finalTemp}<p>`;
  } else if (finalTemp >= 90){
  output.innerHTML = `<p style="color:red">${finalTemp}<p>`;
  } else {
  output.innerHTML = `<p style="color:green">${finalTemp}<p>`;
  }
}


clearText.addEventListener("click", function (event){
  tempField.value = "";
  output.innerHTML = "";
  celBtn.checked = false;
  farBtn.checked = false;
});
