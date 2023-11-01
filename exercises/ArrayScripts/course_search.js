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

// When does the PROG200 course start?
function getStartDate(courseList, courseId) {
  for (const course of courseList) {
    if (course.CourseId == courseId) {
      return course.StartDate;
    }
  }
  return "does not exist";
}

// What is the title of the PROJ500 course?
function getCourseTitle(courseList, courseId) {
  for (const course of courseList) {
    if (course.CourseId == courseId) {
      return course.Title;
    }
  }
  return "does not exist";
}

// What are the titles of the courses that cost $50 or less?
function getCoursesUnderPrice(courseList, maxPrice) {
    let coursesUnderPrice = [];

    for(const course of courseList) {
        if(course.Fee <= maxPrice) {
            coursesUnderPrice.push(course.Title);
        }
    }
    return coursesUnderPrice;
}

// What classes meet in "Classroom 1"?
function getCoursesInLocation(courseList, roomNumber) {
    let coursesInLocation = [];

    for(const course of courseList) {
        if(course.Location == roomNumber) {
            coursesInLocation.push(course.Title);
        }
    }
    return coursesInLocation;
}

// When does the PROG200 course start?
console.log(getStartDate(courses, "PROG200"));

// What is the title of the PROJ500 course?
console.log(getCourseTitle(courses, "PROJ500"));

// What are the titles of the courses that cost $50 or less?
console.log(getCoursesUnderPrice(courses, 50));

// What classes meet in "Classroom 1"?
console.log(getCoursesInLocation(courses, "Classroom 1"));