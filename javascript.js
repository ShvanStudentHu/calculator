const content = document.querySelector(".content");
const calculator = document.querySelector("#three");
const numberButton = document.querySelector(".number-button");
const specialCharButton = document.querySelector(".special-button");
const calculatorScreen = document.querySelector(".calc-screen");
const calc = document.querySelector("#calculator");
// set on true when user pressed a button

const calculatorState = {
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

const globalClickEventListener = (type, cases) => {
  document.addEventListener(type, (e) => {
    cases.forEach(({ selector, handleClick }) => {
      if (e.target.matches(selector)) {
        handleClick(e);
      }
    });
  });
};

globalClickEventListener("click", [
  {
    selector: ".number-button",
    handleClick: (e) => {
      calculatorScreen.textContent += e.target.textContent;
    },
  },
  {
    selector: ".operator-button",
    handleClick: (e) => {
      calculatorState.operator.push(e.target.textContent);
      if (calculatorState.firstNumberPressed == false) {
        calculatorState.numOne.push(Number(calculatorScreen.textContent));
        calculatorScreen.textContent = "";
        calculatorState.firstNumberPressed = true;
      }
    },
  },
  {
    selector: "#equal",
    handleClick: (e) => {
      if (calculatorState.firstNumberPressed == false) {
        return;
      }
      calculatorState.numTwo.push(Number(calculatorScreen.textContent));
      let result = operate(
        calculatorState.numOne[0],
        calculatorState.operator[0],
        calculatorState.numTwo[0]
      );
      calculatorScreen.textContent = result;
      calculatorState.clear();
    },
  },
  {
    selector: "#ac",
    handleClick: (e) => {
      calculatorScreen.textContent = "0";
      calculatorState.clear();
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

const addition = (numOne, numTwo) => numOne + numTwo;

const substraction = (numOne, numTwo) => numOne - numTwo;

const multiplier = (numOne, numTwo) => numOne * numTwo;

const division = (numOne, numTwo) => {
  if (numTwo == 0) {
    return devideByZeroMessage();
  } else {
    return numOne / numTwo;
  }
};

function devideByZeroMessage() {
  return (calculatorScreen.textContent = "OOPS you almost broke the universe");
  // console.log(pl);
}
//incomplete feature
// const buttonActiveState = (selector) => {
//   const fontColor = getComputedStyle(selector).backgroundColor;
//   calc.addEventListener("mousedown", () => {
//     let newFont = fontColor
//       .split("")
//       .filter((char) => char >= 0 && char <= 255)
//       .join("");
//     console.log(newFont);
//   });
//   calc.addEventListener("mouseup", () => {
//     console.log("it goes up");
//   });
// };

// buttonActiveState(special);
