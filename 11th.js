//Map and Filter methods in ts-----------
var numbers = [1, 2, 3, 4, 5];
//!Map Method----------------------------
//1: Doubling each number
// const doubleData:number[] = numbers.map((curVal:number)=>curVal * 2)
// console.log(doubleData);
//2: Converting numbers to strings
// const numberToString:string[] = numbers.map((curElem:number)=>curElem.toString())
// console.log(numberToString);
//!Filter Method----------------------------
//1: Filtering even numbers
var evenNumbers = numbers.filter(function (curElem) { return curElem % 2 === 0; });
console.log(evenNumbers);
//2: Filtering numbers greater than 3
var greaterNumbers = numbers.filter(function (curElem) { return curElem > 3; });
console.log(greaterNumbers);
