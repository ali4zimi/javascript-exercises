'use strict';

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const shopName = "The Morning Cafe"; // const because the name of the shop does not change
let totalCustomers = 7; // let because the number of customers may change
let totalEmployees = 3; // let because the number of employees may change
let isOpen = true; // let because the shop may close or open
let currentManager = "Ali"; // let because the owner may change in the future

console.log("Shop Name:", shopName);
console.log("Total Customers:", totalCustomers);
console.log("Total Employees:", totalEmployees);
console.log("Is Open:", isOpen);
console.log("Current Manager:", currentManager);


// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log("Type of shopName:", typeof shopName);
console.log("Type of totalCustomers:", typeof totalCustomers);
console.log("Type of totalEmployees:", typeof totalEmployees);
console.log("Type of isOpen:", typeof isOpen);
console.log("Type of currentManager:", typeof currentManager);
console.log("Type of null:", typeof null);
console.log("Type of undefined:", typeof undefined);

// The famous historical bug is that `typeof null` returns "object" instead of "null".


// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

let firstName;
let lastName = null;

console.log("First Name:", firstName);
console.log("Type of First Name:", typeof firstName);
console.log("Last Name:", lastName);
console.log("Type of Last Name:", typeof lastName);

// The difference is that `firstName` is `undefined` because it has not been assigned a value, 
// but `lastName` is explicitly set to `null`, indicating the intentional absence of any object value.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const priceNumber = Number(priceText);
const countNumber = Number(countText);
const flagBoolean = Boolean(flagText);
const myNumber = 42;
const myString = String(myNumber);


// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
const bakeryName = "Maison Sarah";
const openingHour = 7;
let loafCount = 12;
console.log(loafCount);

// Repair 1: The reassignment of `bakeryName` was deleted out because it is a `const` and cannot be reassigned.
// Repair 2: The variable `openingHour` was not declare properly, so I added `let` before it to declare it correctly.
// Repair 3: The `console.log(loafCount);` line is placed after the declaration of `loafCount`, so it will work correctly now.


// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

let a = 5; 
let b = 10;
let temp = a;

temp = a; 
a = b;
b = temp;

console.log("After swapping: a =", a, ", b =", b);


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
