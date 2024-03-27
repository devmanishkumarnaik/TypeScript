//#21 Interface----------------------------------------
// interface Greet{
//     name: string;
//     age: number
// }
var product1 = {
    name: "Bag",
    price: 3000,
    quantity: 2
};
var product2 = {
    name: "Laptop",
    price: 30000,
    quantity: 3
};
var calculateTotalPrices = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
//call
console.log(calculateTotalPrices(product1));
console.log(calculateTotalPrices(product2));
