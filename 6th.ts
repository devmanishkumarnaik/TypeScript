//#8: TypeScript Function Mastery: Understanding Invocation, Declaration, and Return Types
//Greeting function define
// function greet(name:string, id:number){
//     console.log(`Welcome, ${name} and your id is ${id}`)
// }

// //function call
   //greet("Vinod", 1);

//Using Arrow function----------------------
// const greet = (name:string, id:number)=>{
//     console.log(`Welcome, ${name} and your id is ${id}`);
// }

// greet("manish", 2);



//Return type--------------------------------------------------
const greet = (name:string, id:number):string=>{
    return `Welcome, ${name} and your id is ${id}`
}

//function call
const myGreet = greet("Vinod", 1);
console.log(myGreet);

//Todo Practice Time------------------------
//? Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwords), and false otherwise.

const isPalindrome = (palin:string):boolean=>{
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
}

console.log(isPalindrome("12321"));

//Homework ✍🏻
//1: Create a function called calculate Average that takes an array of numbers as a parameter and returns the average of those numbers.

//2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.