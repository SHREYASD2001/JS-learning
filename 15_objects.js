// Objects are referenc type
//use curly braces
//when we using the curly braces then it's called object literals
// Dot (.) notation is used to access thevalue from the object
const person = { firstName: "shreyas", lastName: "Dhoke" };
console.log(person);
console.log(typeof person);

//TO access data from the object
//call the key along with  obnject
// Key - we called propeerties
console.log(person.firstName);
console.log(person.lastName);

//TO access data from the object
console.log("----");
console.log(person["firstName"]);
console.log(person["lastName"]);

//can store arrays also in the object
const person1 = {
  firstName: "shreyas",
  lastName: "Dhoke",
  hobbies: ["games", "cartoon"],
};
console.log(person1);

//How to add values in object
person1.gender = "male";
console.log(person1);

//How to add values in object using bracket notation
person1["updatedGender"] = "Male";
console.log(person1);

//difference between dot and bracket notation
let dotObject = {
  firstName: "shreyas",
  lastName: "Dhoke",
  hobbies: ["games", "cartoon"],
};
let bracketObject = {
  firstName: "shreyas",
  lastName: "Dhoke",
  hobbies: ["games", "cartoon"],
  "full name": "Shreyas Dhoke",
};
//if we have to access the properties having two words then use bracket

//if we want to store the variable name as key then use this way
const key = "email";
bracketObject[key] = "shreyas.dhoke@ril.com";
console.log(bracketObject);

bracketObject.key = "shreyas.dhoke@ril.com";
console.log(bracketObject); //this way it will store it as key
