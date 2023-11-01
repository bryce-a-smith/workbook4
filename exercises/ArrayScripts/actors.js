"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?
function getMemberById(membersArray, id) {
  for (const thisMember of membersArray) {
    if (thisMember.memID == id) {
      return thisMember.name;
    }
  }
  return "does not exist";
}

// Who has have been in at least 3 films?
function getMembersWithMinFilmCount(membersArray, minFilmCount) {
  let membersWithMinFilmCount = [];

  for (const thisMember of membersArray) {
    if (thisMember.films.length >= minFilmCount) {
      membersWithMinFilmCount.push(thisMember.name);
    }
  }
  return membersWithMinFilmCount;
}

// Who has a name that starts with "Bob"?
function getMembersWithFirstName(membersArray, firstName) {
  let membersWithFirstName = [];

  for (const thisMember of membersArray) {
    if (thisMember.name.substring(0, firstName.length) == firstName) {
      membersWithFirstName.push(thisMember.name);
    }
  }
  return membersWithFirstName;
}

// HARDER: Which Academy Members have been in a film
// that starts with "A"
function getMembersInFilmsStartingWithLetter(membersArray, firstLetter) {
  let membersInFilmsStartingWithLetter = [];

  for (const thisMember of membersArray) {
    for (const thisFilm of thisMember.films) {
      if (thisFilm.substring(0, 1) == firstLetter) {
        membersInFilmsStartingWithLetter.push(thisMember.name);
        break;
      }
    }
  }
  return membersInFilmsStartingWithLetter;
}

// Who is the Academy Member whose ID is 187?
console.log(getMemberById(academyMembers, 187));

// Who has have been in at least 3 films?
console.log(getMembersWithMinFilmCount(academyMembers, 3));

// Who has a name that starts with "Bob"?
console.log(getMembersWithFirstName(academyMembers, "Bob"));

// HARDER: Which Academy Members have been in a film
// that starts with "A"
console.log(getMembersInFilmsStartingWithLetter(academyMembers, "A"));