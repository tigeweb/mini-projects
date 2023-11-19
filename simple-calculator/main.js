function clearScreen() {
  document.getElementById("result").innerHTML = "";
}

function deleteLastCharacter() {
  let currentValue = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = currentValue.slice(0, -1);
}

function display(value) {
  document.getElementById("result").innerHTML += value;
}

function calculate() {
  let expression = document.getElementById("result").innerHTML;
  let result = eval(expression);
  document.getElementById("result").innerHTML = result;
}
