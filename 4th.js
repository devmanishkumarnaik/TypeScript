//#5: Typescript Boolean and Bigint Types
//Boolean Type ----
var isMyNameVinod = true;
var isDone = true;
var hasStarted = false;
//!Question: Check Even Number
//Write a typescript function called isEven taht takes a number as a parameter and returns true if the number is even and false otherwise.
//todo Homework👉🏻 write a TypeScript function called isdivisibleBy4And8 that takes a number as a parameter and returns true if the number is divisible by both 4 and 8.
function isEven(a) {
    return a % 2 === 0;
}
//func call
console.log(isEven(5));
//BigInt--------------
var bigNumber = 9007199254740992n;
console.log(bigNumber);
var anotherBigNumber = BigInt("90071992547409925");
console.log(anotherBigNumber);

var sum2 = bigNumber+anotherBigNumber;
console.log("sum2" + sum2);
//!Assignment 
//* let sum = bigNumber + anotherBigNumber;
//* let difference = bigNumber - anotherBigNumber;
//* let product = bigNumber*anotherBigNumber;
//* let division = bigNumber/anotherBigNumber;
