const container = document.querySelector("#container");

//add
function add(num1, num2) {
  return num1 + num2;
}
//subtract
function subtract(num1, num2) {
  return num1 - num2;
}
//multiply
function multiply(num1, num2) {
  return num1 * num2;
}
//divide
function divide(num1, num2) {
  //condition ? ifTrue : ifFalse
  return num2 === 0 ? "Error" : num1 / num2;
}

/* operate function - takes an operator and 2 numbers and then calls 
on of the existing functions on the numbers */
function operate(operator, num1, num2) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}
console.log(operate("+", 3, 5));
