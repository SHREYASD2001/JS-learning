//1 typeof operator
string1 = "shreyas";
let age = 22;
console.log(typeof string1);
console.log(typeof age);

//conversion of number into string
age = age + "";
console.log(typeof age);

let num = 22;
console.log(typeof String(num));

//conversion of string to number
let num1 = "34";
let convertedString = +"34";
console.log(typeof Number(num1));
console.log(typeof convertedString);

let value;
console.log(typeof value);

var value2;
console.log(value2);

// const value3; - const value should be initialised

//to print multiple values in one console stTement use comma to separate the value
// console.log(typeof value, value);

//typeof null is object - this is an issue of JS

//BigInt
let number = 123;
console.log(number);
console.log(Number.MAX_SAFE_INTEGER);

let bigintnum = BigInt(123456789009876543234567876);
let samebigintnum = 123456789009876543234567876n;

console.log(bigintnum + samebigintnum);
