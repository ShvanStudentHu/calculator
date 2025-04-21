const content = document.querySelector(".content");
const calculator = document.querySelector("#three");
const numberButton = document.querySelector(".number-button");
const specialCharButton = document.querySelector(".special-button");
const calculatorScreen = document.querySelector(".calc-screen");
const calc = document.querySelector("#calculator");

const calculatorState = {
  firstNumber: null,
  secondNumber: null,
  operator: null,
  operatorPressed: false,
  equalPressed: false,

  clear: function () {
    this.firstNumber = this.secondNumber = this.operator = null;
    this.firstNumberPressed = this.equalPressed = false;
  },

  checkDeclaration: function (property) {
    if (this[property] !== null) {
      return true;
    } else {
      return false;
    }
  },

  checkAllDeclared: function (...property) {
    return property.every((key) => this[key] !== null);
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
      if (!calculatorState.checkDeclaration("operator")) {
        calculatorState.firstNumber = Number(calculatorScreen.textContent);
      } else if (calculatorState.checkDeclaration("operator")) {
        calculatorState.secondNumber = Number(calculatorScreen.textContent);
      }
    },
  },
  {
    selector: ".operator-button",
    handleClick: (e) => {
      if (
        calculatorState.checkAllDeclared(
          "firstNumber",
          "secondNumber",
          "operator"
        )
      ) {
        let result = operate(
          calculatorState.firstNumber,
          calculatorState.operator,
          calculatorState.secondNumber
        );
        calculatorScreen.textContent = result;
        console.log(result);
        calculatorState.clear();
      }
      calculatorState.operator = e.target.textContent;
      calculatorState.firstNumber = Number(calculatorScreen.textContent);
      calculatorScreen.textContent = "";
    },
  },
  {
    selector: "#equal",
    handleClick: (e) => {
      calculatorState.secondNumber = Number(calculatorScreen.textContent);
      let result = operate(
        calculatorState.firstNumber,
        calculatorState.operator,
        calculatorState.secondNumber
      );
      calculatorScreen.textContent = result;
      // calculatorState.clear();
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

const operate = (firstNumber, operator, secondNumber) => {
  if (firstNumber == null || secondNumber == null || !operator) {
    calculatorScreen.textContent = "invalid input";
    return;
  }
  switch (operator) {
    case "+":
      return addition(firstNumber, secondNumber);
    case "-":
      return subtraction(firstNumber, secondNumber);
    case "*":
      return multiplier(firstNumber, secondNumber);
    case "/":
      return division(firstNumber, secondNumber);
    default:
      calculatorScreen.textContent = "Unknown operator";
      return;
  }
};

const addition = (firstNumber, secondNumber) => firstNumber + secondNumber;

const subtraction = (firstNumber, secondNumber) => firstNumber - secondNumber;

const multiplier = (firstNumber, secondNumber) => firstNumber * secondNumber;

const division = (firstNumber, secondNumber) => {
  if (secondNumber == 0) {
    divideByZeroMessage();
  } else {
    return firstNumber / secondNumber;
  }
};

function divideByZeroMessage() {
  calculatorScreen.textContent = "OOPS you almost broke the universe";
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
