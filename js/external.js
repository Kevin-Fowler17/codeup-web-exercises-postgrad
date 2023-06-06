"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");
let userInput2 = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

alert(userInput2 + " is my favorite color too!")

