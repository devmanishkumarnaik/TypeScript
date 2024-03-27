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
function logAndReturn<Manish>(value:Manish){
    return value;
}

//Using the generic function with different types
const numberResult = logAndReturn<number>(42);
const stringResult = logAndReturn<string>("Hello, Generics");
const booleanResult = logAndReturn<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

