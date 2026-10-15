
/*
  JavaScript Practice - 01
  Topic: Variables
*/

// 1. Using let

let city = "Dubai";
let name = "Hima";        // String
let age = 20;             // Number
let isDeveloper = true;   // Boolean
let xyz;                 // Undefined

// 2. Using const
const country = "India";

// 3. Display values in the console
console.log("My name is:", name);
console.log("My age is:", age);
console.log("My country is:", country);
console.log("Live in :", city);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isDeveloper);
console.log(typeof xyz);

// 4. Update a variable declared with let
age = 25;
console.log("Updated age:", age);


console.log("--- JavaScript Operators ---");

// Arithmetic operators
let a = 20;
let b = 6;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

// Comparison operators
console.log("Is a greater than b?", a > b);
console.log("Are a and b equal?", a === b);
console.log("a is less than or equal to b?", a <= b);

// Logical operators
console.log("Both conditions true:", a > 5 && b < 5);
console.log("At least one condition true:", a < 5 || b < 5);
console.log("Reverse true to false:", !true);


console.log("--- JavaScript Conditions ---");

let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("You need to improve");
}

