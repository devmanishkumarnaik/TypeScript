//#11: TypeScript Arrays👉Methods and Iterations
var fruits = ["apple", "banana", "orange", "mango"];
//adding elements to an array using push:
var newUpadatedFruits = fruits.push("Kiwi");
// console.log(newUpadatedFruits);
// console.log(fruits);
//removing elements from an array using pop:
var lastData = fruits.pop();
// console.log(lastData);
// console.log(fruits);
//? Iterating over elements:
//using for loop
// for (let i =0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }
//using for...of loop
// for(const fruit of fruits){
//     console.log(fruit);
// }
//using forEach method
fruits.forEach(function (curVal) { return console.log(curVal); });
