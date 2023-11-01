"use strict";

let myFamily = ["Bryce", "Allie", "Hulanna", "Emmy", "Beethoven", "Frankie", "Timmy", "Gloria"];

// for (let i = 0; i < myFamily.length; i++) {
//   console.log(myFamily[i]);
// }

function displayFamilyMembers(family) {
  for (let member of myFamily) {
    console.log(member);
  }
}

displayFamilyMembers(myFamily);