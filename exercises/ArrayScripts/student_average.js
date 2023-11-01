"use strict";

let studentsList = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

function getAndDisplayAverages(students) {
  //for loops
  //loop through each student
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    //loop through this specific student's scores and add them up
    for (let j = 0; j < students[i].scores.length; j++) {
      sum += students[i].scores[j];
    }
    //calculate the average of this specific student's scores, using the sum we found in the inner loop
    let average = sum / students[i].scores.length;
    //console.log this specific student's name and their average
    console.log(`Name: ${students[i].name}`);
    console.log(`Average Score: ${average.toFixed(2)}\n`);
  }
}

function getAverageScores(students) {
  //for of loop
  for (let student of students) {
    let sum = 0;
    for (const score of student.scores) {
      sum += score;
    }
    //add a new property to the students object and stores average score for each student
    student.averageScore = sum / student.scores.length;
  }
}

function displayAverageScores(students) {
  for (let student of students) {
    console.log(`Name: ${student.name}`);
    console.log(`Average Score: ${student.averageScore.toFixed(2)}\n`);
  }
}

//getAndDisplayAverages(studentsList);

getAverageScores(studentsList);

displayAverageScores(studentsList);

//functions that are passed an object are actually passed the reference in memory to the object
//because of this we are able to change the actual object outside the function when we change it inside the function.
//this is why we have access to the averageScore property on each object in the array
