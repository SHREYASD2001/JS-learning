// == or ===

let num = 5;
let num1 = 7;
console.log(num > num1); //false
console.log(num < num1); //true

num = 7;
num1 = "7";
console.log(num == num1); //true

num = 7;
num1 = "7";
console.log(num === num1); //false - it'll check the datatype also

console.log(num != num1); //false
console.log(num !== num1); //true

// Truthy & Falsy value

if (num > 9) {
  // code
} else {
  // code
}

//Falsy values
//null
//""
//undefined
//0
let emptyString = "";
if (emptyString) {
  console.log("i");
} else {
  console.log("its an empty string");
}
