// let and const are block scope
// var is function scope


{
    const firstName = "Shreyas";
    let firstName1 = "Shreyas Dhoke";
    // we can acces rhe let and const variable inside this block only outside we can;t access
}
// console.log(firstName); //it'll be print undefined because of the abovw ereason
// console.log(firstName1); //it'll be print undefined because of the abovw ereason

{
    var firstName = "shjreyas";
}
console.log(firstName);

var firstName = "shreyas";
console.log(firstName);




console.log("--------");
{
    var firstName2 = "Shreyasaa";
    console.log(firstName2);
}

{
    console.log(firstName2);
}

function myApp() {
    if (true) {
        var firstName = "shreyas Dhoke";
        console.log(firstName);
    }
    console.log(firstName);
}

myApp()