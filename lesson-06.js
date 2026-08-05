'use strict';

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.

const menu = ["Margherita", "BBQ Chicken", "Dumpling", "Falafel", "Pasta"];
console.log(menu);
console.log(menu[0]);
console.log(menu[menu.length - 1]);
console.log(menu.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.

menu.push("Cheeseburger"); // adds to the end
console.log(menu);
menu.unshift("Caesar Salad"); // adds to the beginning
console.log(menu);
menu.pop(); // removes from the end
console.log(menu);
menu.shift(); // removes from the beginning
console.log(menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.

for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for (const item of menu) {
  console.log(item);
}

// I would choose the counting `for` loop when I need the index for some reason, and the `for...of` 
// loop when I just want to iterate over the items without caring about their indices.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];

const displayStrings = prices.map(price => `€${price.toFixed(2)}`);
console.log(displayStrings);

const affordableItems = prices.filter(price => price < 5);
console.log(affordableItems);

const expensiveItem = prices.find(price => price > 10);
console.log(expensiveItem);

// `forEach` does not return a new array or any value; it simply executes a provided function on each element of the array. 
// This is a well-known trap because developers might expect it to return a transformed array like `map` or `filter`, but it 
// does not, which can lead to confusion if they are trying to use it for that purpose.
// https://medium.com/@lsecchi/map-vs-foreach-approach-choose-wisely-e3dbab3e9ab7
 
// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = ["Pinkfong", "Adriano Celentano", "Asake", "Miyagi and Andy Panda", "Johnny Cash"];

artists.push("Taylor Swift"); // Added a new artist to the array

for (const artist of artists) {
  console.log(`Name: ${artist}`);
  console.log(`Genre: ${artist === "Pinkfong" ? "Children" : "Pop"}`);
}

// I did not have to change the loop or the logging logic; it automatically includes the new artist in the output.



// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.

const menuCopy = menu; // Shared reference
menuCopy.push("Sushi");
console.log(menu);
console.log(menuCopy);

const menuSpreadCopy = [...menu]; // Spread copy
menuSpreadCopy.push("Tacos");
console.log(menu.length);
console.log(menuSpreadCopy.length);



// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

let sum = 0;
let largest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(sum);
console.log(largest);

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.

function reverseString(str) {
  let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  return reversed;
}

console.log(reverseString("hello"));

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }   
    return count;
}

console.log(countVowels("hello"));

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr === reverseString(lowerStr);
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Level")); // true

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
