const prompt = require('prompt-sync')();

// Problem 1 - numbers less than 2^n
{
    const n = parseInt(prompt("Enter a number: "));
    for(let i=0; i <= n; i++) {
        console.log("Number "+i + "th place is "+ Math.pow(2, i));
    }
}