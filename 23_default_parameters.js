function addTwo(a,b) {
    if (typeof b == "undefined") {
        b = 2;
    }
    return a+b;
}

console.log(addTwo(4));




function updatedMethodOfAddTwo(a, b=2) {
    return a+b;
}
// if we are not passing other argument it'll take the default one
console.log(updatedMethodOfAddTwo(4));

// if we are passing all argument it won't conside default
console.log(updatedMethodOfAddTwo(3,9));