'use strict';

// Lesson 01 exercise: Running JavaScript three ways
// Clone the exercise repository for this course, https://github.com/Leon-Arno/JS-Exercises, to
// your computer.
// Make the copy your own. Inside the cloned folder, delete the `.git` folder to remove the
// connection to the original repository: run `rm -rf .git` on macOS and Linux, or `Remove-Item
// -Recurse -Force .git` in PowerShell on Windows.
// Run `git init` in the folder, create a new empty repository named `javascript-exercises` on
// your own GitHub account, connect it as the remote, and push. This is the same publishing
// flow you performed in the Git course.
// Create a branch named `lesson-01-exercise` and switch to it, then open `lesson-01.js`. The
// questions are already inside as comments; work through them in order, writing your answers
// directly beneath each one.

// TODO: Part one.
// Start the Node REPL and evaluate at least four arithmetic expressions of your own, using
// more than one operator across them. Copy the complete session transcript and paste it into
// `lesson-01.js` as a comment block where the question asks for it.

// PS C:\Users\aliba\Desktop\sap-internship\JS-Exercises> node
// Welcome to Node.js v22.16.0.
// Type ".help" for more information.
// > 2*8+4
// 20
// > 3 * 11 / 3
// 11
// > (50 - 1) / 7
// 7
// > 20 / 3
// 6.666666666666667
// > .exit

// TODO: Part two.
// Write a `console.log` line in `lesson-01.js` that prints a greeting, save the file
// deliberately, and run it with `node lesson-01.js`.

console.log('Hello, welcome to the JavaScript exercises!');


// TODO: Part three.
// Change the greeting text, run the file again without saving, and observe that the output has
// not changed. Save and run once more, then describe in a one-sentence comment what happened
// and why.

// When I changed the greeting text and ran it without saving, the outpud didn't change because 
// Node.js runs the last saved version of the file, so I had to save it first for the changes to take effect.


// TODO: Part four.
// Run your greeting line in the Chrome DevTools Console. In a comment, record one way the
// experience matched Node and one way it differed.

// Both Node.js and Chrome DevTools Console print the same greeting message, but Node.js runs 
// in a terminal environment while Chrome DevTools Console runs in a web browser environment. 


// TODO: Part five.
// From a folder that does not contain the file, deliberately run `node lesson-01.js` so that
// the terminal reports it cannot find the file. Paste that error transcript as a comment, then
// explain in one sentence how you resolved it.

// PS C:\Users\aliba\Desktop\sap-internship\JS-Exercises> cd ..
// PS C:\Users\aliba\Desktop\sap-internship> node .\lesson-01.js
// node:internal/modules/cjs/loader:1404
//   throw err;
//   ^

// Error: Cannot find module 'C:\Users\aliba\Desktop\sap-internship\lesson-01.js'
//     at Function._resolveFilename (node:internal/modules/cjs/loader:1401:15)
//     at defaultResolveImpl (node:internal/modules/cjs/loader:1057:19)
//     at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1062:22)
//     at Function._load (node:internal/modules/cjs/loader:1211:37)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49 {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: []
// }

// Node.js v22.16.0
// PS C:\Users\aliba\Desktop\sap-internship> 


// TODO: Save the file, commit your work with a clear message, push the branch, and open a pull
// request into your main branch.
// TODO: Submit the link to the pull request for review.
