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

const prompt = require('prompt-sync')({sigint: true});
// Problem 2 -Day and month range check
{
    let month = prompt('Enter a month: ');
    let day = prompt('Enter day: ');
    let isInDateRange = false;
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
}

// Problem 3 -check if leap year
{
    let year = prompt("Enter the year: ");
    let isLeapYear = false;
    if (year > 999 && year <= 9999) {
        if (year % 4 == 0) {
            if (year % 100 != 0) {
                isLeapYear = true;
            }
            if (year % 400 == 0) {
                isLeapYear = true;
            }
        }
    }
    console.log("Is the given year a leap year- " + isLeapYear);
}