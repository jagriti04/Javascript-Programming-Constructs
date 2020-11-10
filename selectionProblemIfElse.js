// Problem 1 - find max and min value

{
    let num1 = Math.floor(Math.random() * 900) + 100;
    let num2 = Math.floor(Math.random() * 900) + 100;
    let num3 = Math.floor(Math.random() * 900) + 100;
    let num4 = Math.floor(Math.random() * 900) + 100;
    let num5 = Math.floor(Math.random() * 900) + 100;

    console.log("Five randoms are: " + num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5);

    let minValue = Math.min(num1, num2, num3, num4, num5);
    let maxValue = Math.max(num1, num2, num3, num4, num5);

    console.log("Minimum value is- " + minValue);
    console.log("Maximum value is- " + maxValue);
}

// Problem 2 -Day and month range check
{
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let isInDateRange = false;
    readline.question('Enter a month: ', (month) => {
        readline.question('Enter day: ', (day) => {
            if (month == 'March' && day >= 20) {
                isInDateRange = true;
            }
            if (month == 'April' || month == 'May') {
                isInDateRange = true;
            }
            if (month == 'June' && day <= 20) {
                isInDateRange = true;
            }
            console.log("The given day and month is in range - " + isInDateRange);
            readline.close();
        })
    });
}