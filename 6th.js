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
var greet = function (name, id) {
    return "Welcome, ".concat(name, " and your id is ").concat(id);
};
//function call
var myGreet = greet("Vinod", 1);
console.log(myGreet);
//Todo Practice Time------------------------
//? Write a function called isPalindrome that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwords), and false otherwise.
var isPalindrome = function (palin) {
    var myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("12321"));
