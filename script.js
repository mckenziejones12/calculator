let firstOperand = "";
let secondOperand = "";
let currentOperation = null;

const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.getElementById("clear");
const delBtn = document.getElementById("delete");
const decimal = document.getElementById("decimal");
const equalSign = document.getElementById("equalSign");
const previousOperationDisplay =
  document.getElementsByClassName("previousOperation");
const currentOperationDisplay =
  document.getElementsByClassName("currentOperation");

//add event listeners
numberBtns.forEach((button) =>
  button.addEventListener("click", () => numberChoice(button.textContent))
);
operatorBtns.forEach((button) =>
  button.addEventListener("click", () => operatorChoice(button.textContent))
);
clearBtn.addEventListener("click", clear);
delBtn.addEventListener("click", deleteBtn);
decimal.addEventListener("click", appendDecimal);
equalSign.addEventListener("click", compute);

//clear function - clears display of any # or memory of operation
function clear() {}

//delete function - deletes the last digit in current operation
//(only 1 item at a time)
function deleteBtn() {}

//number(s) choice function
function numberChoice(number) {}

//operator choice function
function operatorChoice(operator) {}

//decimal function
function appendDecimal() {}

/*computation of number and operator - taking previous operand 
  as num1 and current operand as num2 */
function compute() {}

//function to update calculator display
function updateDisplay() {}

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
  return num2 === 0 ? "You can/'t divide by 0 dummy!" : num1 / num2;
}

/* operate function - takes an operator and 2 numbers and then calls 
  on of the existing functions on the numbers */
function operate(operator, num1, num2) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
}
