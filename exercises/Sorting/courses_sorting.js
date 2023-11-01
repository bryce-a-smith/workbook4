"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

//Provide a helper method that assists the sort() method.
function compareAscending(a, b) {
    let aUpper = a.Title.toUpperCase();
    let bUpper = b.Title.toUpperCase();
    if(aUpper < bUpper) {
        return -1;//return -1 if elements are in the right order
    } else if(aUpper==bUpper) {
        return 0;//return 0 if the elements are the same
    } else {
        return 1;//return a positive number if the elements need to be swapped
    }
}


//Pass named function as an argument to main function
console.log(courses.sort(compareAscending));

