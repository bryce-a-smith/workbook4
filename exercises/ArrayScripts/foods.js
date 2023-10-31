"use strict";

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let subtotal = 0;
let length = lunch.length;

for(let i = 0; i < length; i++) {
    subtotal += lunch[i].price;
}

let tax = subtotal * .08;
let tip = subtotal * .18;
let totalDue = subtotal + tax + tip;

console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Tip: $${tip.toFixed(2)}`);
console.log(`Total Due: $${totalDue.toFixed(2)}`);

