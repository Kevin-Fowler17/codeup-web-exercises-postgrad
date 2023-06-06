"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");
let userInput2 = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

alert(userInput2 + " is my favorite color too!")


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days,
// they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a
// movie per day is $3, how much will you have to pay?
let littleMermaid = prompt("How many days did you have The Little Mermaid?");
let brotherBear = prompt("How many days did you have Brother Bear?");
let hercules = prompt("How many days did you have Hercules?");
let pricePerDay = prompt("How much would you like to pay per day per movie?");
let total = (littleMermaid * pricePerDay) + (brotherBear * pricePerDay) + (hercules * pricePerDay);
alert("You owe $" + total + "!");

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a
// different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive
// in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for
// Amazon.
let googleHours = prompt("How many hours did you work for Google?");
let amazonHours = prompt("How many hours did you work for Amazon?");
let facebookHours = prompt("How many hours did you work for Facebook?");
let income = (googleHours * 400) + (amazonHours * 380) + (facebookHours * 350);
alert("Your gross pay is $" + income + ".");
