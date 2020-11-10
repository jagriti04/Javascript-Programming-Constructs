const prompt = require('prompt-sync')();

// Problem 1 - numbers less than 256
{
    const num = parseInt(prompt("Enter a number to find power of 2: "));
    let powerNum = 1;
    let power = 0;
    while(powerNum < 256 && power <= num) {
        powerNum = Math.pow(2, power);
        console.log(power + " number is "+ powerNum);
        power++;
    }
}