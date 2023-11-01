"use strict";

let lunch = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

function getTotal(lunch) {
  let subtotal = 0;

  //for loop
  // for(let i = 0; i < lunch.length; i++) {
  //     subtotal += lunch[i].price;
  // }

  //for of loop
  for (let l of lunch) {
    subtotal += l.price;
  }

  let tax = subtotal * 0.08;
  let tip = subtotal * 0.18;
  let totalDue = subtotal + tax + tip;

  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Tax: $${tax.toFixed(2)}`);
  console.log(`Tip: $${tip.toFixed(2)}`);
  console.log(`Total Due: $${totalDue.toFixed(2)}`);
}

getTotal(lunch);