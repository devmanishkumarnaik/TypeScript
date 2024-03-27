//#11: TypeScript Arrays👉Methods and Iterations

const fruits: string[] = ["apple", "banana", "orange", "mango"];

//adding elements to an array using push:
const newUpadatedFruits = fruits.push("Kiwi");
// console.log(newUpadatedFruits);
// console.log(fruits);

//removing elements from an array using pop:
const lastData = fruits.pop();
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
fruits.forEach((curVal: string) => console.log(curVal));
