"use strict";
// DO-WHILE
let i = 0;

do {
  //print starting value of i, increments i, prints updated value of i
  console.log(`i started at ${i++}, ended at ${i}`);
  //checks and prints condition
  console.log(`checks condition: ${i} <= 5 is ${i <= 5}\n`);
} while (i <= 5);

console.log(`exited loop.`);
