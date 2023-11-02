"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Milk Duds", price: 1.79 },
  { product: "Skittles", price: 2.5 },
  { product: "Licorice", price: 5.89 },
  { product: "Fruit Snacks", price: 1.79 },
  { product: "Kit Kat", price: 2.89 },
  { product: "Sour Patch Kids", price: 5.79 },
];

//Provide a helper method that assists the sort() method.
function compareAscending(a, b) {
    let aUpper = a.product.toUpperCase();
    let bUpper = b.product.toUpperCase();
    if(aUpper < bUpper) {
        return -1;//return -1 if elements are in the right order
    } else if(aUpper==bUpper) {
        return 0;//return 0 if the elements are the same
    } else {
        return 1;//return a positive number if the elements need to be swapped
    }
}

//products in ascending order
//Pass named function as an argument to main function
console.log(products.sort(compareAscending));

//prices in descending order
//Use an anonymous function and pass the function expression.
console.log(products.sort(function(a, b) {
    let aUpper = a.price;
    let bUpper = b.price;
    if(aUpper > bUpper) {
        return -1;//return -1 if elements are in the right order
    } else if(aUpper==bUpper) {
        return 0;//return 0 if the elements are the same
    } else {
        return 1;//return a positive number if the elements need to be swapped
    }
}));



