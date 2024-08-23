let fruits = ["apple", "mango", "orange", "grape"];

//for loope or while or for in or for if loog
for (let i = 0; i < fruits.length; i++) {
  //traditional loop
  console.log(fruits[i]);
}

// for ()
//main array is stored in heap memory
//use of const for array
let fruits1 = ["apple", "mango", "orange", "grape"];
fruits.push("New fruits");
console.log(fruits1);

//while loop
let fruits2 = ["apple", "mango", "orange", "grape"];
let i = 0;
while (i < fruits2.length) {
  console.log(fruits2[i]);
  console.log("----");
  i++;
}
console.log(fruits2);

//for - of loop
let newArray = [];
for (let fruit of fruits) {
  console.log(fruit);
  newArray.push(fruit);
}
console.log(newArray);

//for - in loop
let newIndexArray = [];
for (let index in fruits) {
  console.log(index);
  newIndexArray.push(fruits[index]);
}
console.log(newIndexArray);
