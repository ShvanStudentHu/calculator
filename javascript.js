console.log("hello world");
const content = document.querySelector(".content");

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

const addition = (numOne, numTwo) => numOne + numTwo;

const substraction = (numOne, numTwo) => numOne - numTwo;

const multiplier = (numOne, numTwo) => numOne * numTwo;

const division = (numOne, numTwo) => numOne / numTwo;

// main();
