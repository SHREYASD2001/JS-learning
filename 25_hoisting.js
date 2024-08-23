hello();

function hello() {
    console.log("Hello World");
}

//we cannot call function firstly in case of function expresssion
//this behaviour is called hoisting

console.log(hello1);
var hello1 = "Hello World before";
//above one give undefined


// console.log(hello1);
// let hello1 = "Hello World before";
//it'll throws the error