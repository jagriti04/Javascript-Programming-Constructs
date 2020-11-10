const prompt = require('prompt-sync')();

// Problem 1 - change number to word
{
    let number = prompt("Enter a single digit number (0-9): ");
    if (number == 0)
        console.log("number is: zero");
    else if (number == 1)
        console.log("number is: one");
    else if (number == 2)
        console.log("number is: two");
    else if (number == 3)
        console.log("number is: three");
    else if (number == 4)
        console.log("number is: four");
    else if (number == 5)
        console.log("number is: five");
    else if (number == 6)
        console.log("number is: six");
    else if (number == 7)
        console.log("number is: seven");
    else if (number == 8)
        console.log("number is: eight");
    else if (number == 9)
        console.log("number is: nine");
}
