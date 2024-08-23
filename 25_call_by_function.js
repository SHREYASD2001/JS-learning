// //in as function as a parameter it can accept anything
// function func() {
//     console.log("Hello world");
// }
// // func();


// function func1(callback) {
//     console.log("inside func1");
//     callback();
//     console.log("outside func2");
// }
// func1(func);


console.log("Example");
const personalDetails = {
    firstName: "SHreyas",
    lastName: "dhoke",
    age: 22
}

function shreyas({ firstName, lastName, age }) {
    console.log("Inside Shreyas loop");
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log("OUTSIDE Shreyas loop");
    return age;
}

function enterUserDetail() {
    console.log("Inside the enterUserDetail loop");
    let va = window.prompt("enter user firstname,lastname and age which is separated by comma values").split(",");
    console.log(va);
    if (Array.isArray(va)) {
        for (let valu in va) {
            switch (valu) {
                case "0":
                    personalDetails["firstName"] = va[valu];
                    break;

                case "1":
                    personalDetails["lastName"] = va[valu];
                    break;

                case "2":
                    personalDetails["age"] = va[valu];
                    break;

                default:
                    break;
            }
        }
    }
    console.log("Outside the enterUserDetail loop");
    return personalDetails["firstName"];
}


const printValueInTheFormatOfString = (value) => {
    if (value < 20) {
        console.log("Enter personal detail again");
    } else {
        console.log(`The age of ${enterUserDetail()} is ${personalDetails.age}`);
    }
}
printValueInTheFormatOfString(shreyas(personalDetails));