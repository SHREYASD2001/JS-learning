//used in react and in object

const Person = {
    firstName : "Shreyas",
    lastName : "Dhoke",
}

function printDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.lastName);
    console.log(obj.gender);
}

printDetails(Person);

console.log("printDetailsAfterDestructurung");
function printDetailsAfterDestructurung({firstName, lastName, gender}) {
    console.log(firstName);
    console.log(lastName);
    console.log(gender);
}

printDetailsAfterDestructurung(Person)
