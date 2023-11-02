"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function getMedian(scores) {
  //Sorts in ascending order
  let sortedScores = scores.sort(function (a, b) {
    if (a < b) {
      return -1; //return -1 if elements are in the right order
    } else if (a == b) {
      return 0; //return 0 if the elements are the same
    } else {
      return 1; //return a positive number if the elements need to be swapped
    }
  });

  console.log(sortedScores);

  if (sortedScores.length % 2 == 0) {
    let sum = sortedScores[sortedScores.length / 2 - 1] + sortedScores[sortedScores.length / 2];
    return sum / 2;
  } else {
    return sortedScores[(sortedScores.length - 1) / 2];
  }
}

let myMedian = getMedian(myScores);
console.log(`My median is ${myMedian.toFixed(2)}`);

let yourMedian = getMedian(yourScores);
console.log(`Your median is ${yourMedian.toFixed(2)}`);
