let firstName = "Shreyas";
console.log(firstName[0]);
console.log(firstName.length);
console.log(firstName[firstName.length - 1]);

// Methods for String - string is immutable
// 1. Trim method - it's used to remove the empty space from both the side
//It'll give the new string it's not modifying the existing one
let name1 = "  Shreyas   D ";
var new_string = name1.trim();
console.log(name1);
console.log(new_string);

//2 toUpperCase - it'll make all character as upper case
let string1 = "Shreyas";
let updatedString1 = string1.toUpperCase();
console.log(updatedString1);
updatedString1 = string1.toLowerCase();
console.log(updatedString1);

//3 String slice
string1 = "shreyasdhoke";
slicedString = string1.slice(0, 4); // it'll give the "shre"
slicedString = string1.slice(4); // if'll we use one argument then it'll start from that argument
