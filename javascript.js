console.log("hello world");
const content = document.querySelector(".content");
const calculator = document.querySelector("#three");
const number = document.querySelector(".number-button");
const calculatorScreen = document.querySelector(".calc-screen");
// set on true when user pressed a button

const calcObject = {
  numOne: [],
  numTwo: [],
  operator: [],
  firstNumberPressed: false,
  equalPressed: false,

  clear: function () {
    [
      (this.numOne = []),
      (this.numTwo = []),
      ((this.operator = []), (this.firstNumberPressed = false)),
    ];
  },
};

const globalClickEventListner = (type, cases) => {
  document.addEventListener(type, (e) => {
    cases.forEach(({ selector, handleClick }) => {
      if (e.target.matches(selector)) {
        handleClick(e);
      }
    });
  });
};

// function handleClick(e) {
//   let num = e.target.textContent;
//   calcObject.numbers.push(Number(num));
//   calculatorScreen.textContent = num;
// }

globalClickEventListner("click", [
  {
    selector: ".number-button",
    handleClick: (e) => {
      calculatorScreen.textContent += e.target.textContent;
    },
  },
  {
    selector: ".operator-button",
    handleClick: (e) => {
      calcObject.operator.push(e.target.textContent);
      if (calcObject.firstNumberPressed == false) {
        calcObject.numOne.push(Number(calculatorScreen.textContent));
        calculatorScreen.textContent = "";
        calcObject.firstNumberPressed = true;
      } else if (calcObject.firstNumberPressed == true) {
      }
    },
  },
  {
    selector: "#equal",
    handleClick: (e) => {
      if (calcObject.firstNumberPressed == false) {
        return;
      }
      calcObject.numTwo.push(Number(calculatorScreen.textContent));
      let result = operate(
        calcObject.numOne[0],
        calcObject.operator[0],
        calcObject.numTwo[0]
      );
      calculatorScreen.textContent = result;
      calcObject.clear();
    },
  },
]);

const operate = (numOne, operator, numTwo) => {
  switch (operator) {
    case "+":
      return addition(numOne, numTwo);
    case "-":
      return substraction(numOne, numTwo);
    case "*":
      return multiplier(numOne, numTwo);
    case "/":
      return division(numOne, numTwo);
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
