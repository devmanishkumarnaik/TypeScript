//#7: TypeScript Type Inference:


//ToDo -- what are some best practices for using type inference in TypeScript ?
//1: Use type inference for simple cases where the assigned value clearly indicates the intended type.
//2: When in doubt, provide explicit type annotations to make your intentions clear.
//3: Avoid relying too hevily on type reference when the assigned value is complex or ambiguous.
//4: Regularly review and refactor your code to ensure the inferred types align with your intentions.

//Example----
let myName = "Vinod";
let myFavNum = 105555;

let firstName = "Vinod";// The compiler infers the type string for the variable name.

let age = 25; // The compiler infers the type number for the variable age.

let isValid = true; //The compiler infers the type boolean the variable isValid.


//! Here are the two questions for practices !----------------
//* 1: Declare a variable messsage and initialize it with the value "Hello, TypeScript!". Infer the type of message using type inference.

//* 2: Write a function calculateArea that takes the length and width parameters of type number and returns their product and the return type of the function using type inference.