
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


console.log("--- For Loop ---");

for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}


console.log("--- While Loop ---");

let count = 1;

while (count <= 3) {
    console.log("Count:", count);
    count++;
}


console.log("--- JavaScript Functions ---");

// 1. Create a function
function greet() {
    console.log("Hello, Hima!");
}

// 2. Call the function
greet();
greet();

// 3. Function with parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Hima");
greetUser("xyz");

// 4. Function that returns a value
function add(a, b) {
    return a + b;
}

let result = add(10, 5);
console.log("Addition result:", result);


console.log("--- JavaScript Arrays ---");

let skills = ["HTML", "CSS", "JavaScript", "PHP"];

// Display the entire array
console.log(skills);

// Access individual items (index starts at 0)
console.log("First skill:", skills[0]);
console.log("Second skill:", skills[1]);

// Add a new item
skills.push("React");

// Check the updated array
console.log("Updated skills:", skills);

// Check the number of items
console.log("Total skills:", skills.length);


console.log("--- JavaScript Objects ---");

let developer = {
    name: "Hima",
    age: 20,
    city: "Dubai",
    role: "Web Developer"
};

// Access object properties
console.log("Name:", developer.name);
console.log("City:", developer.city);

// Update a property
developer.role = "Full-Stack Developer";

// Add a property
developer.country = "India";

console.log("Updated developer:", developer);


console.log("--- JavaScript Array Methods ---");

let prices = [100, 200, 300, 400];

// 1. forEach(): perform an action for each item
prices.forEach(function(price) {
    console.log("AED ", price);
});

// 2. map(): create a new array by changing each item
let discountedPrices = prices.map(function(price) {
    return price + 10;
});

console.log("Discounted prices:", discountedPrices);

// 3. filter(): select items matching a condition
let expensivePrices = prices.filter(function(price) {
    return price > 300;
});

console.log("Prices 250 and above:", expensivePrices);

const add2 = (a,b) => a + b;
console.log(add2(15,5));

const multiply2 = (a,b) => a * b;
console.log(multiply2(10,3));

const square = (n) => n * n;
console.log(square(8));

const product = "Laptop";
const price = 2500;
const quantity = 2;

console.log(`I bought ${quantity} ${product}(s) for AED ${price} each.
Total price: AED ${price * quantity}`);

// Task A - Array destructuring

const skills = ["HTML","CSS","JavaScript"];

const[firstSkill,secondSkill,thirdSkill] = skills;
console.log(`First skill: ${firstSkill} ,Second skill ${secondSkill}`);

// Task B - Object destructuring

const developer = {
  name : "Hima",
  role : "Web Developer",
  experience : 3
};

const{name,role,experience} = developer;
console.log(`Name ${name} ,Role ${role},Experience ${experience}`);






























