//ordered collection of items/elements which means it has index
//Arrays are mutable
//It;s reference type and it's an object
let fruits = ["apple", "mango", "orange", "grape"];
let array = ["sapple", 1, 2, 3.3, null, undefined, 0]; //we can add anhything
console.log(fruits);
console.log(typeof fruits);

// methods in arrays
fruits[1] = "banana";
console.log(fruits);
console.log(Array.isArray(fruits));

//array push method - it'll change the original array
fruits.push("Guava");
console.log(fruits);

//pop method - it'll rmeove the last item. Also, it returns the removed value
let returnValue = fruits.pop();
console.log(fruits);
console.log(`returnValue is ${returnValue}`);

//unshift method - It'll add the element at the start. also, we can add multiple item at same time
fruits.unshift("papaya");
console.log(fruits);

fruits.unshift("fruit1", "fruit2", "fruit3");
console.log(fruits);

//shift method - It'll remove the element from starting
returnValue = fruits.shift();
console.log(fruits);
console.log(returnValue);

//How to clone array
let fruits2 = fruits;
console.log(fruits);
let newArray = fruits.slice(0);
console.log(fruits);
console.log(newArray);

let newArray2 = [].concat(fruits);
console.log(fruits);
console.log(newArray2);

//Spread Operator
let new_array_for_spread = [...fruits];
//... is used to add the existing array
// according to performance slice method is fast compare to spread operator

let newArrayFOR = [].concat(fruits, newArray);
let check_array_for_spread_operator = [...fruits, newArray];

// NOTE - push & pop is fast compare to shift & unshift
