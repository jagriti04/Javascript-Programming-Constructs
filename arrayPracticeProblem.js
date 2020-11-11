// Problem 1
{
    let numArray = [];
    for (let i = 0; i < 10; i++) {
        numArray[i] = Math.floor(Math.random() * 900) + 100;
    }
    console.log("Array is- " + numArray);
    // second min and max without sorting
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

// Problem 2
// second min and max with sorting (problem 2)
{
    let sortArray = [];
    for (let i = 0; i < 10; i++) {
        sortArray[i] = Math.floor(Math.random() * 900) + 100;
    }
    console.log("Array is (with sorting)- " + sortArray);
    findSecondMaxMinWithSorting(sortArray);
}

function findSecondMaxMinWithSorting(array) {
    array.sort();
    console.log("sorted array " + array);
    console.log("Second largest num is- " + array[8]);
    console.log("Second smallest num is- " + array[1]);
}

// Problem 3 - prime factors in array
function isPrimeNum(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

function getPrimeFactors(num) {
    let factorsArray = [];
    for (let i = 2; i <= num; i++) {
        while (isPrimeNum(i) && num % i == 0) {
            if (!factorsArray.includes(i))
                factorsArray.push(i);
            num /= i;
        }
    }
    return factorsArray;
}

console.log("Prime factors of 323- " + getPrimeFactors(323));
console.log("Prime factors of 75- " + getPrimeFactors(75));

// Problem 4 - to show sum of three integers is zero
function checkIfSumZero(numArray) {
    const arrayLength = numArray.length;
    let isSumZero = false;
    for (let i = 0; i < arrayLength - 2; i++) {
        for (let j = i + 1; j < arrayLength - 1; j++) {
            for (let k = j + 1; k < arrayLength; k++) {
                if (numArray[i] + numArray[j] + numArray[k] == 0) {
                    console.log("Triplet with sum zero: " + numArray[i] + " " + numArray[j] + " " + numArray[k]);
                    isSumZero = true;
                }
            }
        }
    }
    if (isSumZero == false) {
        console.log("No such triplet exists");
    }
}
{
    let numArray = [1, -2, 3, 4, -5, -3, 2];
    checkIfSumZero(numArray);
}
