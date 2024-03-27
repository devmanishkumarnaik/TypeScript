//#14 type alias in ts------Making Your Code Easier to Read & Maintain🚀--------

//* To define a type alias, you use teh type keyword followed by the alias name and the type definition: 

// type Person = {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     class?: string; //Optional Property
//     address:{city: string; country: string}
// }

// const person:Person = {
//     name: "Manish",
//     age: 20,
//     isStudent: true,
//     address:{
//         city: "Pune",
//         country: "India"
//     }
// }

// const person1:Person = {
//     name: "Sujal",
//     age: 20,
//     isStudent: true,
//     address:{
//         city: "Pune",
//         country: "India"
//     }
// }

// const person2:Person = {
//     name: "Prabin",
//     age: 20,
//     isStudent: true,
//     address:{
//         city: "Pune",
//         country: "India"
//     }
// }

// const person3:Person = {
//     name: "Krishna",
//     age: 20,
//     isStudent: true,
//     address:{
//         city: "Pune",
//         country: "India"
//     }
// }

// const person4:Person = {
//     name: "Rupesh",
//     age: 20,
//     isStudent: true,
//     address:{
//         city: "Pune",
//         country: "India"
//     }
// }

//------------------------------------------------------------------------------------------//
type Product = {
    name: string;
    price: number;
    quantity: number;
}

const product:Product = {
    name: "laptop",
    price: 55000,
    quantity: 5
}

const calculateTotalPrice = (product:Product)=>{
    return `${product.name} total cost ${product.price * product.quantity}`
}
console.log(calculateTotalPrice(product));