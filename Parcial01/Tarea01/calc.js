var num1;
var num2;
var result;

function getSuma() {
  var num1Element = document.getElementById("num1");
  var num2Element = document.getElementById("num2");

  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);

  result = parseInt(num1) + parseInt(num2);
  console.log(result);

  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + result;
}

function getResta() {
  var num1Element = document.getElementById("num1");
  var num2Element = document.getElementById("num2");

  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);

  result = num1 - num2;
  console.log(result);

  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + result;
}

function getMulti() {
  var num1Element = document.getElementById("num1");
  var num2Element = document.getElementById("num2");

  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);

  result = num1 * num2;
  console.log(result);

  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + result;
}

function getDiv() {
  var num1Element = document.getElementById("num1");
  var num2Element = document.getElementById("num2");

  num1 = num1Element.value;
  num2 = num2Element.value;
  console.log(num1);
  console.log(num2);

  result = num1 / num2;
  console.log(result);

  var resultElement = document.getElementById("resultado");
  resultElement.innerHTML = 'Resultado = ' + result;
}
