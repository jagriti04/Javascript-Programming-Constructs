const prompt = require('prompt-sync')();

// Problem 1 - change number to word
{
    let number = parseInt(prompt("Enter a single digit number (0-9): "));
    switch (number) {
        case 0:
            console.log("Number is Zero");
            break;
        case 1:
            console.log("Number is One");
            break;
        case 2:
            console.log("Number is Two");
            break;
        case 3:
            console.log("Number is Three");
            break;
        case 4:
            console.log("Number is Four");
            break;
        case 5:
            console.log("Number is Five");
            break;
        case 6:
            console.log("Number is Six");
            break;
        case 7:
            console.log("Number is Seven");
            break;
        case 8:
            console.log("Number is Eight");
            break;
        case 9:
            console.log("Number is Nine");
            break;
        default:
            console.log("Not a correct number");
    }
}