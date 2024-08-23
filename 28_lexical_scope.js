console.log("Hellow world");

function myFunc() {

    const var1 = "valu1";
    function func1() {
        console.log(`earlier value of ${var1}`);
        let var1 = 69;
        console.log("inside myFunc");
        console.log(`latest value = ${var1}`);
    };

    const func2 = function() {};

    const func3 = () => {};

    console.log(var1);
    func1();
}

myFunc();


// if we are declaring the variable globally then in that case it will fetch the value lexically
const var2 = "valu1";
function myFunc() {

    function func1() {
        console.log(`earlier value of ${var2}`);
        let var2 = 69;
        console.log("inside myFunc");
        console.log(`latest value = ${var2}`);
    };

    const func2 = function() {};

    const func3 = () => {};

    console.log(var2);
    func1();
}