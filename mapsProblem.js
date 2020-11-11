// Problem 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findKeyWithMinValue(diceMap) {
    let minValue = diceMap.get(1);
    let minKey = 1;
    for (let i=1; i<=6; i++) {
        if (minValue > diceMap.get(i)) {
            minValue = diceMap.get(i);
            minKey = i;
        }
    }
    return minKey;
}

{
    let diceValueTimes = new Map();
    let maxReached = false;
    for (let i = 1; i <= 6; i++) {
        diceValueTimes.set(i, 0);
    }

    while (!maxReached) {
        let dieNum = getRandomInt(1, 6);
        let value = diceValueTimes.get(dieNum);
        value++;
        diceValueTimes.set(dieNum, value);
        console.log(diceValueTimes);
        if (value == 10) {
            maxReached = true;
            console.log("Number that reached maximum times: " + dieNum);
        }
    }
    console.log("Number that reached minimum times: " + findKeyWithMinValue(diceValueTimes));
}

// Problem 2- birth month
{
    let birthMonthMap = new Map();
    let peopleNum = 50;
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, 0);
    }
    while(peopleNum>=0) {
        let monthNum = getRandomInt(1, 12);
        let value = birthMonthMap.get(monthNum);
        value++;
        birthMonthMap.set(monthNum, value);
        peopleNum--;
    }
    console.log(birthMonthMap);
}