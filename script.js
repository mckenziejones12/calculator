let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldReset = false;

//grab all buttons
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const clearBtn = document.getElementById("clear");
const delBtn = document.getElementById("delete");
const decimal = document.getElementById("decimal");
const equalSign = document.getElementById("equalSign");
const previousOperationDisplay = document.getElementById("previousOperation");
const currentOperationDisplay = document.getElementById("currentOperation");

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
function clear() {
  currentOperationDisplay.textContent = "0";
  previousOperationDisplay.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = "";
}

//delete function - deletes the last digit in current operation
//(only 1 item at a time)
function deleteBtn() {
  currentOperationDisplay.textContent = currentOperationDisplay.textContent
    .toString()
    .slice(0, -1);
}

//number(s) choice function
function numberChoice(number) {
  if (currentOperationDisplay.textContent === "0" || shouldReset) resetScreen();
  currentOperationDisplay.textContent += number;
}

//operator choice function
function operatorChoice(operator) {
  if (!!currentOperation) compute();
  firstOperand = currentOperationDisplay.textContent;
  currentOperation = operator;
  previousOperationDisplay.textContent = `${firstOperand}${currentOperation}`;
  shouldReset = true; //why???????!!!!!!!! *****************************************************
}

//decimal function
function appendDecimal() {
  if (shouldReset) resetScreen();
  if (currentOperationDisplay.textContent === "")
    currentOperationDisplay.textContent = "0";
  if (currentOperationDisplay.textContent.includes(".")) return;
  currentOperationDisplay.textContent += ".";
}

/*computation of number and operator - taking previous operand 
  as num1 and current operand as num2 */
function compute() {
  // debugger;
  if (currentOperation === null || shouldReset) return;
  if (currentOperation === "&divide" && currentOperationDisplay === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentOperationDisplay.textContent;
  const result = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  currentOperationDisplay.textContent = result;
  previousOperationDisplay.textContent = `${firstOperand}${currentOperation}${secondOperand} =`;
  currentOperation = null;
}

//reset screen
function resetScreen() {
  currentOperationDisplay.textContent = "";
  shouldReset = false;
}

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
  return num2 === 0 ? "You can't divide by 0 dummy!" : num1 / num2;
}
//round result function
function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

/* operate function - takes an operator and 2 numbers and then calls 
  on of the existing functions on the numbers */
function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "x") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
  return null;
}

// console.log(operate("+", 3, 3));
