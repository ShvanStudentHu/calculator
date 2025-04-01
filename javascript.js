console.log("hello world");
const content = document.querySelector(".content");
const calculator = document.querySelector("#three");
const number = document.querySelector(".number-button");
const calculatorScreen = document.querySelector(".calc-screen");

currentText = calculator.textContent;
``;

const globalClickEventListner = (type, selector, handleClick) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      handleClick(e);
    }
  });
};

function handleClick(e) {
  let num = e.target.textContent;
  console.log(num);
  calculatorScreen.textContent = num;
}

globalClickEventListner("click", ".number-button", handleClick);
// document.addEventListener("click", (e) => {
//   if (e.target.matches(".number-button")) {
//     let num = e.target.textConte
//     console.log(num);
//   }
// });

// const main = () => {
//   const numOne = Number(prompt("first number"));
//   const operator = prompt("choose your operator");
//   const numTwo = Number(prompt("second number"));
//   operate(numOne, operator, numTwo);
// };

const operate = (numOne, operator, numTwo) => {
  switch (operator) {
    case "+":
      console.log(addition(numOne, numTwo));
      break;
    case "-":
      console.log(substraction(numOne, numTwo));
      break;
    case "*":
      multiplier(numOne, numTwo);
      break;
    case "/":
      division(numOne, numTwo);
      break;
    default:
      console.log("oops something went wrong");
  }
};

const func = () => {
  number.addEventListener("click", () => {
    let a = number.textContent;
    calculatorScreen.textContent = a;
    return a;
  });
};

const functionone = () =>
  calculator.addEventListener("click", () => {
    calculatorScreen.textContent = currentText + "hi";
    num = calculatorScreen.textContent;
    console.log("i was clicked");
    return num;
  });

const addition = (numOne, numTwo) => numOne + numTwo;

const substraction = (numOne, numTwo) => numOne - numTwo;

const multiplier = (numOne, numTwo) => numOne * numTwo;

const division = (numOne, numTwo) => numOne / numTwo;

// main();
