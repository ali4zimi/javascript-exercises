'use strict';

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const menuItem = {
    name: "Margherita Pizza",
    price: 9.5,
    vegetarian: true,
    ingredients: ["tomato sauce", "mozzarella", "basil"]
};

console.log(menuItem.name);
console.log(menuItem.price);

const key = "vegetarian";
console.log(menuItem[key]);

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.

menuItem.describe = function() {
    return `The ${this.name} costs €${this.price} and is ${this.vegetarian ? "vegetarian" : "not vegetarian"}.`;
}

console.log(menuItem.describe());


// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
const menu = [
    { name: "Margherita Pizza", price: 9.5, vegetarian: true },
    { name: "Pepperoni Pizza", price: 11.0, vegetarian: false },
    { name: "Veggie Burger", price: 8.0, vegetarian: true },
    { name: "Pasta", price: 10.0, vegetarian: true },
    { name: "Chicken Wings", price: 12.0, vegetarian: false }
];

for (const item of menu) {
    console.log(`${item.name} - €${item.price} - ${item.vegetarian}`);
}


// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

menu.filter(item => item.vegetarian).map(item => console.log(item.name));

const cheapItem = menu.find(item => item.price < 3);
console.log(cheapItem); // find returns undefined when nothing matches.



// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const menuItem1 = menu[0];
console.log(Object.keys(menuItem1));
console.log(Object.values(menuItem1));

for (const [key, value] of Object.entries(menuItem1)) {
    console.log(`${key}: ${value}`);
}


// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const menuItem2 = menu[1];
menuItem2.price = 12.0;
console.log(menu[1]); // The price has changed for the original object.

const menuItemCopy = { ...menu[1], price: 10.0 };
console.log(menu[1]);
console.log(menuItemCopy); // The copy has a different price now.


// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence = "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const counter = {};

for (let i = 0; i < words.length; i++) {
    let curWord = words[i];
    let count = 0;

    for (let j = 0; j < words.length; j++) {
        if (curWord == words[j]) {
            count++;
        }
    }

    counter[curWord] = count
}

console.log(counter)

const sortedCounter = Object.entries(counter).sort((a, b) => b[1] - a[1]); // I have used array sort method.

const sortedCounterObject = Object.fromEntries(sortedCounter); // I have used this to convert it back to object.
console.log(sortedCounterObject); 

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
