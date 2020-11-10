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