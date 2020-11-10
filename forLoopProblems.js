const prompt = require('prompt-sync')();

// Problem 1 - numbers less than 2^n
{
    const n = parseInt(prompt("Enter a number to find power of 2: "));
    for (let i = 0; i <= n; i++) {
        console.log("Number " + i + "th place is " + Math.pow(2, i));
    }
}

// Problem 2 - Harmonic Number
{
    const num = parseInt(prompt("Enter a number to find nth harmonic term: "));
    let harmonicNum = 0;
    for (let i = 1; i <= num; i++) {
        harmonicNum = harmonicNum + (1 / i);
    }
    console.log("nth term is: " + harmonicNum);
}

// Problem 3 - Prime Number
{
    const num = parseInt(prompt("Enter a number to find if number is prime: "));
    let isPrime = true;
    if (num == 1) {
        console.log("number is neither prime nor composite");
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }
        console.log(num + " is prime number - " + isPrime);
    }
}

// Problem 5- find factorial
{
    const num = parseInt(prompt("Enter a number to find factorial: "));
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    console.log("factorial of " + num + " is " + factorial);
}