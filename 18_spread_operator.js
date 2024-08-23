const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2];
console.log(newArray);

let string = "abc";
let listOfString = [...string];
console.log(listOfString);

string = "1234567876543";
listOfString = [...string];
console.log(listOfString);

//Spread operator in objects
// there should be one key in ojects
const per = {
  key1: "value1",
  key2: "value2",
  key1: "value59",
};
console.log(per);

const obj1 = {
  key1: "value1",
  key2: "value2",
};
let obj2 = {
  key4: "value4",
  key3: "value3",
};

let newObj = { ...obj1 };
console.log(newObj);

obj2 = {
  key1: "uniqueValue",
  key4: "value4",
  key3: "value3",
};
newObj = { ...obj1, ...obj2 };
console.log(newObj);

newObj = { ...obj1, ...obj2, key23: "value23" };
console.log(newObj);

string = "abc";
listOfString = { ...string };
console.log(listOfString);
