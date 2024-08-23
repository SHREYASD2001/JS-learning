let total = 0;
for (let i = 0; i <= 10; i++) {
  total += i;
  console.log(i);
}
console.log(total);
// if we are declaring i with let then we can't access outside for loop

for (var i = 0; i <= 9; i++) {
  console.log(i);
}
// if we are declaring i with var then we can access outside for loop

//continue & break keywords are used here
// continue -> will jump towards the next execution
// break - will terminate the execution
