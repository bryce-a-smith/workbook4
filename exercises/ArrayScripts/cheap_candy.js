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

// Which candies costs less than $4.00?
function getCandiesUnderPrice(candyList, maxPrice) {
  let candyUnderPrice = [];

  for (const currentCandy of candyList) {
    if (currentCandy.price <= maxPrice) {
      candyUnderPrice.push(currentCandy.product);
    }
  }
  return candyUnderPrice;
}

// Which candies has "M&M" in its name?
function getCandiesOfType(candyList, typeOfCandy) {
    let candyOfType = [];
  
    for (const currentCandy of candyList) {
    if (currentCandy.product.includes(typeOfCandy)) {
        candyOfType.push(currentCandy.product);
      }
    }
    return candyOfType;
  }

// Do we carry "Swedish Fish"?
function isCandyCarried(candyList, candy) {
    for(const currentCandy of candyList) {
        if(currentCandy.product == candy) {
            return true;
        }
    }
    return false;
}

// Which candies costs less than $4.00?
console.log(getCandiesUnderPrice(products, 4.0));

// Which candies has "M&M" in its name?
console.log(getCandiesOfType(products, "M&M"));

// Do we carry "Swedish Fish"?
console.log(isCandyCarried(products, "Swedish Fish"));
