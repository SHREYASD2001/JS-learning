let firstName = "shreyas";
let lastName = "Dhoke";

let fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);

firstName = "17";
lastName = "10";

fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);

fullName = +firstName + +lastName;
console.log(fullName);
console.log(typeof fullName);

firstName = "Shreyas";
fullName = "My name is " + firstName + " My age is " + lastName;
console.log(fullName);

//Template string
let aboutMe = `My name is ${firstName}. And My Age is ${lastName}`;
