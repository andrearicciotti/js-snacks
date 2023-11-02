function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function genRandomNumbers(max) {
    const result = [];
    while (result.length <= 15) {
        let curNum = getRndInteger(1, max);
        if (!result.includes(curNum)) {
            result.push(curNum)
        }
    }
    return result;
}

// Esercizio nr1
function arrayLength(array) {
    const arrayLength = array.length;
    return arrayLength;
}

// Esercizio nr2
function arrayToString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        const curElem = array[i];

        if (i === array.length - 1) {

            string += `${curElem}`;

        } else {

            string += `${curElem},`;

        }
    }
    return string;
}

// Esercizio nr3
function removeLastElemArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const curElem = array[i];
        if(i !== array.length - 1) {
            result.push(curElem);
        }
        
    }
    return result;
}

// Esercizio nr4
function insertAtTheEnd(array,newElem) {
    let result = array;
    result.push(newElem);
    return result;
}

// Esercizion nr5
function removeFirstElemArray(array) {
    array.shift();
    return array;
}

// Esercizion nr6
function InsertAtTheStart(array,newElem) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const curElem = array[i];
        if (i === 0) {
            result.push(newElem, curElem);
        } else {
            result.push(curElem);
        }
        
    }
    return result;
}

// Esercizion nr7
function arrayJoin(arrayA, arrayB) {
    result = [];
    for (let i = 0; i < arrayA.length; i++) {
        const curElemA = arrayA[i];
        result.push(curElemA);
    }
    for (let i = 0; i < arrayB.length; i++) {
        const curElemB = arrayB[i];
        result.push(curElemB);
    }
    return result;
}

// Esercizion nr8
function findElemInArray(array, elemToFind) {
    result = false;
    for (let i = 0; i < array.length; i++) {
        const curElem = array[i];
        if (curElem === elemToFind) {
            result = true;
        }
    }
    return result;
}

// Esercizion nr9
function findIndex(array, elemToFindIndex) {
    result = -1;
    for (let i = 0; i < array.length; i++) {
        const curElem = array[i];
        if (curElem === elemToFindIndex) {
            result = i;
        }
    }
    return result;
}

// Esercizion nr10
function orderedArray(a, b) {
    return a - b;
}