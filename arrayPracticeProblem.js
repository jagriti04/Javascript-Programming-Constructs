// Problem 1
{
    let numArray = [];
    for (let i = 0; i < 10; i++) {
        numArray[i] = Math.floor(Math.random() * 900) + 100;
    }
    console.log("Array is- " + numArray);
    let secondMax = findSecondMaxWithoutSorting(numArray);
    console.log("Second largest num is- " + secondMax);
    let secondMin = findSecondMinWithoutSorting(numArray);
    console.log("Second smallest num is- " + secondMin);
}

function findSecondMaxWithoutSorting(array) {
    let max = Math.max(...array);
    array.splice(array.indexOf(max), 1);
    return Math.max(...array);
}

function findSecondMinWithoutSorting(array) {
    let min = Math.min(...array);
    array.splice(array.indexOf(min), 1);
    return Math.min(...array);
}