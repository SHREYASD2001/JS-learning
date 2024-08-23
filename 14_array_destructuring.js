const list = ["shreyas", "dhoke"];
let firstName = list[0];
let lastName = list[1];
console.log(firstName);
console.log(lastName);

let [declaredFirstName, declaredLastname] = list;
console.log(declaredFirstName);
console.log(declaredLastname);

list.push("third variable");
let [value1, value2] = list;
console.log(value1);
console.log(value2);

let [value01, , value03] = list;
console.log(value01);
// console.log(value02);
console.log(value03);

list.pop();
let [value011, value012, value13] = list;
console.log(value011);
console.log(value012);
console.log(value13); //undefined

let string = ["1", "2", "3", "4", "5"];
let [check1, check2, ...newCheckArray] = string;
console.log(check1);
console.log(check2);
console.log(newCheckArray);

//if array has one item and we are declaring two values then in that case it's taking undefined
