let bracketObject = {
  firstName: "shreyas",
  lastName: "Dhoke",
  hobbies: ["games", "cartoon"],
  "full name": "Shreyas Dhoke",
};

//for printing thr Key
for (let key in bracketObject) {
  console.log(key);
}

//for printing th valjue
for (let key in bracketObject) {
  console.log(bracketObject[key]);
  console.log(`The value of key ${key} is ${bracketObject[key]}`);
}

console.log(Object.keys(bracketObject));
console.log(typeof Object.keys(bracketObject));
console.log(Array.isArray(Object.keys(bracketObject)));

//FOR of loop
console.log("//FOR of loop");
for (let key of Object.keys(bracketObject)) {
  console.log(bracketObject[key]);
}
