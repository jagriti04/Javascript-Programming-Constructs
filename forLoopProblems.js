const prompt = require('prompt-sync')();

// Problem 1 - numbers less than 2^n
{
    const n = parseInt(prompt("Enter a number to find power of 2: "));
    for(let i=0; i <= n; i++) {
        console.log("Number "+i + "th place is "+ Math.pow(2, i));
    }
}

// Problem 2 - Harmonic Number
{
    const num = parseInt(prompt("Enter a number to find nth harmonic term: "));
    let harmonicNum = 0;
    for(let i=1; i <= num; i++) {
        harmonicNum = harmonicNum + (1/i);
    }
    console.log("nth term is: "+harmonicNum);
}