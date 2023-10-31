"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum/scores.length;
}

function getAvg(scores) {
    let sum = 0
    for(let score of scores) {
        sum += score;
    }
    return sum/scores.length;
}

let myAverage = getAverage(myScores);
console.log(`My average is ${myAverage.toFixed(2)}`);

let yourAverage = getAverage(yourScores);
console.log(`Your average is ${yourAverage.toFixed(2)}`);

let myAvg = getAvg(myScores);
console.log(`My average is ${myAvg.toFixed(2)}`);

let yourAvg = getAvg(yourScores);
console.log(`Your average is ${yourAvg.toFixed(2)}`);