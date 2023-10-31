"use strict";
//FOR LOOP
console.log(`Declares i, it exists only within the scope of this loop\n`);
for (let i = 0; i <= 5; i++) {
  //checks and prints condition
  console.log(`check condition: ${i} <= 5 is ${i <= 5}`);
  //print starting value of i, increments i, prints updated value of i
  console.log(`i started at ${i}, ended at ${i+1}\n`);
}
console.log(`Check condition: 6 <= 5 is false\nDoes not enter loop.\ni is no longer defined.`);
