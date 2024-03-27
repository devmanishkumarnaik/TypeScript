//#19 Generics-------------------
// function logAndReturn(value: number | string) {
//     console.log(value)
//     return value;
// }
// const numberResult : string | number = logAndReturn(42);
// const stringResult : string | number = logAndReturn("Hello, Generics");
// console.log(numberResult);
// console.log(stringResult);
//Generic function to log and return an input value--------------------------------
function logAndReturn(value) {
    return value;
}
//Using the generic function with different types
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Hello, Generics");
var booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
