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

// Problem 4 - Conversion
{
    const FEET_TO_INCH = 12;
    const FEET_TO_METER = 0.30;
    const INCH_TO_FEET = 1 / 12;
    const METER_TO_FEET = 3.28;

    console.log("Choose to convert: 1.feet to inch\n2.feet to meter\n3.inch to feet\n4.meter to feet");
    let choice = parseInt(prompt("Choose-"));

    let convertNum = parseInt((prompt("Enter a number to convert units: ")));
    switch (choice) {
        case 1:
            console.log("Converted value: " + convertNum * FEET_TO_INCH + " inch");
            break;
        case 2:
            console.log("Converted value: " + convertNum * FEET_TO_METER + " meter");
            break;
        case 3:
            console.log("Converted value: " + convertNum * INCH_TO_FEET + " feet");
            break;
        case 4:
            console.log("Converted value: " + convertNum * METER_TO_FEET + " feet");
            break;
        default:
            console.log("Choose correct option")
    }
}