function func1 () {
    console.log("inside the func1");
    function func2() {
        console.log("inside the func2");
    }
    return func2;
}

const ans = func1();
ans();

function func12 () {
    console.log("inside the func12");
    return function() {
        return "inside the func22";
    };
}

const ans1 = func12();
console.log(ans1());