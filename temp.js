let result = document.querySelector("#result"); 
let Fahrenheit = document.querySelector("#Fahrenheit"); 
let Celsius = document.querySelector("#Celsius"); 
let res = 0; 
let res1=0; 
function toCelsius() { 
  let deg = document.getElementById("deg").value; 
  deg = Number(deg); 
  res = [(deg - 32) * 5] / 9; 
  console.log(res); 
} 
 
function toFahrenheit() { 
  let deg = document.getElementById("deg").value; 
  deg = Number(deg); 
  res1 = (deg * 9) / 5 + 32; 
  console.log(res1); 
} 
 
function type() { 
  if (temp.value == 1) { 
    toCelsius(); 
    result.innerHTML = res.toFixed(2) + "`C"; 
  } 
  else if(temp.value==2){ 
    toFahrenheit(); 
    result.innerHTML = res1.toFixed(2) + "`F"; 
  } 
   
} 
 
function button() { 
  //   let deg = document.getElementById("deg").value; 
  //   deg = Number(deg); 
  type(); 
  console.log(res); 
}