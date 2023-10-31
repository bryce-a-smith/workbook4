"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
    let length = scores.length;
    let sum = 0;
    for(let i = 0; i < length; i++) {
        sum += scores[i];
    }
    return sum/length;
}

let myAverage = getAverage(myScores);
console.log(`My average is ${myAverage.toFixed(2)}`);

let yourAverage = getAverage(yourScores);
console.log(`Your average is ${yourAverage.toFixed(2)}`);