const person = {
  firstName: "Shreyas",
  lastName: "Dhoke",
};
const var1 = person.firstName;
const var2 = person.lastName;
console.log(var1);
console.log(var2);

const { firstName, lastName } = person;
console.log(firstName, lastName);

person["age"] = "22";
person["mailId"] = "shreyas.dhoke@ril.com";
console.log(person);
const { firstName: var11, lastName: var22 } = person;
console.log(var11, "+ +", var22);

const { firstName: value1, lastName: value2, ...props } = person;
console.log(firstName, value1, lastName, value2);
console.log(props);

//Objects inside array
const users = [
  { userId: 1, gender: "male", place1: "nagpur" },
  { userId: 2, gender: "Female", place1: "KolkatA" },
  { userId: 3, gender: "MALE", place1: "RAIPUR" },
];
console.log(users);

for (let user of users) {
  console.log(user);
  console.log(user.id);
}

//Nested Destructuring
const [user1, user2, user3] = users;
console.log("__________");
console.log(user1);
console.log(user2);
console.log(user3);

const [{ userId }, , { place1 }] = users;
console.log(userId);
console.log(place1);

const [{ userId: num }, , { place1: location1 }] = users;
console.log(num);
console.log(location1);
