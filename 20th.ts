//#21 Interface----------------------------------------
// interface Greet{
//     name: string;
//     age: number
// }

// const greets:Greet = {
//     name: 'Vinod',
//     age: 29
// }

interface Products{
    name: string;
    price: number;
    quantity: number
}

const product1:Products = {
    name: "Bag",
    price: 3000,
    quantity: 2
}
const product2:Products = {
    name: "Laptop",
    price: 30000,
    quantity: 3
}

const calculateTotalPrices = (product:Products)=>{
    const {price, quantity} = product;
    return price*quantity
}

//call
console.log(calculateTotalPrices(product1));
console.log(calculateTotalPrices(product2));