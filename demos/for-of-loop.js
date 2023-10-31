"use strict";

const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

const employees = [
  { name: "Alice", department: "HR", salary: 50000 },
  { name: "Bob", department: "Engineering", salary: 60000 },
  { name: "Charlie", department: "Marketing", salary: 55000 },
];

// Calculate the total salary of all employees in the Engineering department
let totalSalary = 0;

for (let employee of employees) {
  if (employee.department === "Engineering") {
    totalSalary += employee.salary;
  }
}

console.log("Total salary in the Engineering department: $" + totalSalary);
