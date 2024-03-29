"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color.toLowerCase() === "red") {
//         console.log("Red means stop.")
//     } else if (color.toLowerCase() === "blue") {
//         console.log("Blue is color of cold.")
//     } else if (color.toLowerCase() === "green") {
//         console.log("Green is the color money, money, money!")
//     } else if (color.toLowerCase() === "yellow") {
//         console.log("You coward!")
//     } else {
//         console.log("Is that even a color?")
//     }
// }

// analyzeColor("Red")
// analyzeColor("bLUe")
// analyzeColor("GREEN")
// analyzeColor("yellow")
// analyzeColor("orange")


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log("Color chosen: " + randomColor)
// analyzeColor(randomColor)

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color.toLowerCase()) {
        case "red":
            alert("Red means stop.");
            break;
        case "blue":
            alert("Blue is color of cold.");
            break;
        case "green":
            alert("Green is the color money, money, money!");
            break;
        case "yellow":
            alert("You coward!");
            break;
        default:
            alert(color + ", is that even a color?");
            break;
    }
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let colorInput = prompt("Enter a color, any color.");
analyzeColor(colorInput);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(discount, total) {

    let discountedPrice = 0;

    if (discount === 0) {
        discountedPrice = total;
    } else if (discount === 1) {
        discountedPrice = total * .9;
    } else if (discount === 2) {
        discountedPrice = total * .75;
    } else if (discount === 3) {
        discountedPrice = total * .65;
    } else if (discount === 4) {
        discountedPrice = total * .5;
    } else {
        discountedPrice = 0;
    }

    alert("Your lucky number was " + discount + ". Your total bill before discount is $" + total + ". Your final price after discount is $" + discountedPrice + ".");
}

// calculateTotal(0, 100)
// calculateTotal(1, 100)
// calculateTotal(2, 100)
// calculateTotal(3, 100)
// calculateTotal(4, 100)
// calculateTotal(5, 100)

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

let totalBillBeforeDiscount = prompt("What was your total bill?");
calculateTotal(luckyNumber, totalBillBeforeDiscount);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let confirmed = confirm("Would you like to enter a number?");

if (confirmed) {
    let valueEntered = prompt("Enter a number ...");
    if (isNaN(valueEntered)) {
        alert("That is not a number!");
    } else {
        oddEven(valueEntered);
        plus100(valueEntered);
        negativePositive(valueEntered);
    }
}

function oddEven(valueEntered) {
    if(valueEntered % 2 == 0) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }
}

function plus100(valueEntered) {
    alert("The number you entered " + valueEntered + ", added to 100 is " + (parseInt(valueEntered) + 100) + ".");
}

function negativePositive(valueEntered) {
    if(valueEntered > 0){
        alert("The number you entered is positive.");
    } else if (valueEntered < 0) {
        alert("The number you entered is negative.");
    } else {
        alert("The number you entered is neutral.");
    }
}
