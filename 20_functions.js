function singHappyBirthday() {
  console.log("Happt birthday to you");
}

singHappyBirthday();

function addTwoNumber(num1, num2) {
  //num1 & num2 are the parameters
  return num1 + num2;
}

console.log(addTwoNumber(3, 5));
//3,5 are the arguments
//DRY - don't repeat yourself
console.log(undefined + undefined);

function addThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(addThreeNumbers(3, 4, 5));
console.log(addThreeNumbers(3, 4)); //NaN

function isNumberEven(num1) {
  return num % 2 === 0;
}

const num = 3;
console.log(isNumberEven(num));
