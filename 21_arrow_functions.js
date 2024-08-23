//normal function
function stringFunction0(num1, num2) {
    return num1 + num2
}
console.log(stringFunction0(12, 23));

//function declaration
const stringFunction = function (num1, num2) {
    return num1 + num2;
}
console.log(stringFunction(10, 2));


//arrow function
const stringFunction1 = (num1, num2) => {
    return num1 + num2;
}
console.log(stringFunction1(10, 3));


//if one parameter is there then we could use in below way
const stringFunction2 = num1 => {
    return num1 + num1;
}
console.log(stringFunction2(10));


const stringFunction3 = num => num + num;
console.log(stringFunction3(20));

const stringFunction4 = num => { num + num };
console.log(stringFunction3(20));