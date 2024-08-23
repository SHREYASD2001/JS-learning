function myFunc(a,b,c) {
    console.log(`value iof a is ${a}`);
    console.log(`value iof b is ${b}`);
    console.log(`value iof c is ${c}`);
}

myFunc(1,2,3,4,5,6)

console.log("myFuncWithRestparameter");
function myFuncWithRestparameter(a,b,...c) {
    console.log(`value iof a is ${a}`);
    console.log(`value iof b is ${b}`);
    console.log(`value iof c is ${c}`);
}

myFuncWithRestparameter(1,2,3,4,5,6)

console.log("add All number with single parameter +/n");

function addAll(...num) {
    let total =0;
    for (let numb of num) {
        total += numb;
    }
    console.log(total);
}
addAll(1,2,3,4,5,6)

console.log("arrowFuncOfAddAll");
const arrowFuncOfAddAll = (...numbe) => {
    let total =0;
    for (let numb of numbe) {
        total += numb;
    }
    console.log(total);
}
arrowFuncOfAddAll(1,2,3,4,5,6,7)