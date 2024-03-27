//Map and Filter methods in ts-----------
const numbers: number[] = [1,2,3,4,5];

//!Map Method----------------------------

//1: Doubling each number
// const doubleData:number[] = numbers.map((curVal:number)=>curVal * 2)
// console.log(doubleData);

//2: Converting numbers to strings
// const numberToString:string[] = numbers.map((curElem:number)=>curElem.toString())
// console.log(numberToString);

//!Filter Method----------------------------

//1: Filtering even numbers
const evenNumbers:number[] = numbers.filter((curElem:number)=>curElem%2 === 0)
console.log(evenNumbers);

//2: Filtering numbers greater than 3
const greaterNumbers:number[] = numbers.filter((curElem:number)=>curElem>3)
console.log(greaterNumbers);

//Homework ✍🏻---------------------------------------------------------------------------------------------
//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
//? 2: Given an array of numbers, create a new array that contains the square of each number.

//* Practice questions for filter:
//? 1: Given an array of strings, create a new array thet contains only the strings with a length greater than 4.
//* const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
//? 2: Given an array of strings, filter out the names that start with the letter "A". 



//1: Create a function called calculate Average that takes an array of numbers as a parameter and returns the average of those numbers.

//2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.

