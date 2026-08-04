'use strict';

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Maison Sarah";
const openingHour = 8;
const closingHour = 18;

console.log(`Welcome to ${shopName}! We are open from ${openingHour} AM to ${closingHour} PM.`);


// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
const cleaned = messy.trim().replace("   ", " ");

console.log(cleaned);

// trim() removes whitespace from both ends of the string
// replace() to remove extra spaces in the middle of the string, there was no word to replace I guess.
// Also, I think there is no wrong case in the string, so I didn't use any method to change the case.


// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";

console.log(product.length); 
console.log(product.indexOf("whole"));
console.log(product.slice(16, 21)); 
console.log(flavorList.split(","));


// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;

// step by step calculation of final price
const taxAmount = netPrice * taxRate;
const finalPrice = netPrice + taxAmount;

console.log(`The final price is $${finalPrice.toFixed(2)}.`);

// The formatting step must come last because toFixed() returns a string. Therefore, if we applied it 
// before the calculation, we would be performing arithmetic on a string, which would lead to incorrect results. 


// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
const randomNumber1to6 = Math.floor(Math.random() * 6) + 1;
const randomNumber10to20 = Math.floor(Math.random() * 11) + 10;

console.log(randomNumber1to6);
console.log(randomNumber10to20);
// The adaptation: we change the multiplier to 11 and add 10 to shift the range from 0-10 to 10-20. 


// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const string1 = "Maison"
const string2 = "Sarah"
const concatenatedString = string1.concat(" ", string2);
console.log(concatenatedString);

// The method I chose is concat(). It combines two or more strings into one string.


// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.

// Username generator exercise
function generateUsername(firstName, lastName) {
  const username = firstName.charAt(0).toLowerCase() + lastName.toLowerCase();
  return username;
}

const username = generateUsername("John", "Doe");
console.log(username);


// Mad-libs story exercise
const adjective = "wonderful";
const noun = "Startupistan";
const verb = "teaches";
const place = "Germany";

const story = `I have found a ${adjective} program in ${place} called ${noun}, which ${verb} me how to code!`;
console.log(story);


// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
