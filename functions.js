const prompt = require('prompt-sync')({ sigint: true });
// Problem 1 - temperature conversion
function getDegF(degC) {
    return (degC * 9 / 5) + 32;
}
function getDegC(degF) {
    return (degF - 32) * 5 / 9;
}

{
    let choice = parseInt(prompt("Choose- 1. Celsius to Fahrenheit and 2. Fahrenheit to Celsius"));
    let temperature = parseInt(prompt("Enter temperature value"));

    switch (choice) {
        case 1:
            if (temperature >= 0 && temperature <= 100) {
                let temp = getDegF(temperature);
                console.log("temp is " + temp + " F")
            } else {
                console.log("Invalid input");
            }
            break;
        case 2:
            if (temperature >= 32 && temperature <= 212) {
                let temp = getDegC(temperature);
                console.log("temp is " + temp + " C")
            } else {
                console.log("Invalid input");
            }
            break;
        default:
            console.log("invalid choice");
            break;
    }
}