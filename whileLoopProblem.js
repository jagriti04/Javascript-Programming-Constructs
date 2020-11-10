const prompt = require('prompt-sync')({ sigint: true });

// Problem 1 - numbers less than 256
{
    const num = parseInt(prompt("Enter a number to find power of 2: "));
    let powerNum = 1;
    let power = 0;
    while (powerNum < 256 && power <= num) {
        powerNum = Math.pow(2, power);
        console.log(power + " number is " + powerNum);
        power++;
    }
}

// Problem 3 - Head or tails
{
    let headsWin = 0;
    let tailsWin = 0;
    const HEADS = 0;
    while (headsWin < 11 && tailsWin < 11) {
        let outcome = Math.floor(Math.random() * 10) % 2;
        if (outcome == HEADS) {
            headsWin++;
        } else {
            tailsWin++;
        }
    }
    console.log("Number of heads won-" + headsWin + " Number of tails won- " + tailsWin);
}