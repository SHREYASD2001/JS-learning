//game
let num = 18;
let guess = prompt("Enter any number");
//prompt store anything in the form of string only
console.log(typeof guess, guess);
console.log(typeof +guess, +guess);

if (num === guess) {
  console.log("you won");
} else if (num > guess) {
  console.log("you gussed smaller number");
} else if (num < guess) {
  console.log("you guessed bigger number");
} else {
}
