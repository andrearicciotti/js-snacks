// Esercizio nr1
const numbersArray = genRandomNumbers(20);
// console.log(numbersArray);

const numbersArrayLength = arrayLength(numbersArray);

// console.log(numbersArrayLength);

// Esercizio nr2
const numbersArrayToString = arrayToString(numbersArray);
// console.log(numbersArrayToString);

// Esercizio nr3
const array3 = genRandomNumbers(20);
// console.log(array3);

const arrayLastElemDelete = removeLastElemArray(array3);

// console.log(arrayLastElemDelete);

// Esercizio nr4
const array4 = genRandomNumbers(20);
// console.log(array4);

const elem4 = "E";

const newArray4 = insertAtTheEnd(array4, elem4)
// console.log(newArray4);

// Esercizion nr5
const array5 = genRandomNumbers(20);
// console.log(array5);

const newArray5 = removeFirstElemArray(array5);
// console.log(newArray5);

// Esercizion nr6
const array6 = genRandomNumbers(20);
// console.log(array6);

const elem6 = "E";

const newArray6 = InsertAtTheStart(array6, elem6);
// console.log(newArray6);

// Esercizion nr7
const array7a = genRandomNumbers(20);
// console.log(array7a);
const array7b = genRandomNumbers(20);
// console.log(array7b);

const newArray7 = arrayJoin(array7a, array7b);
// console.log(newArray7);

// Esercizion nr8
const array8 = genRandomNumbers(20);
// console.log(array8);

const elem8 = 15;
// console.log(elem8);

const result8 = findElemInArray(array8, elem8);
// console.log(result8);

// Esercizion nr9
const array9 = genRandomNumbers(20);
// console.log(array9);

const elem9 = 15;
// console.log(elem9);

const result9 = findIndex(array9, elem9);
// console.log(result9);

// Esercizion nr10
const array10 = genRandomNumbers(20);
console.log(array10);

const newArray10 = array10.sort(orderedArray);
console.log(newArray10);