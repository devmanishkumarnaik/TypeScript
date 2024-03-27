//#5: Typescript Boolean and Bigint Types
//Boolean Type ----

let isMyNameVinod:boolean = true;
let isDone:boolean = true;
let hasStarted:boolean = false;

//!Question: Check Even Number
//Write a typescript function called isEven taht takes a number as a parameter and returns true if the number is even and false otherwise.

//todo Homework👉🏻 write a TypeScript function called isdivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.

function isEven(a: number):boolean{
    return a%2 === 0
}

//func call
console.log(isEven(5));

//BigInt--------------
let bigNumber:bigint = 9007199254740992n
//console.log(bigNumber);

let anotherBigNumber = BigInt("90071992547409925")
console.log(anotherBigNumber);


//!Assignment 
//* let sum = bigNumber + anotherBigNumber;
//* let difference = bigNumber - anotherBigNumber;
//* let product = bigNumber*anotherBigNumber;
//* let division = bigNumber/anotherBigNumber;