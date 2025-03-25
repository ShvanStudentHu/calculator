console.log("hello world");

numOne = Number(prompt("first number"));
numTwo = Number(prompt("second number"));

const addition = (numOne, numTwo) => {
  let result;
  result = numOne + numTwo;
  return result;
};

alert(addition(numOne, numTwo));
