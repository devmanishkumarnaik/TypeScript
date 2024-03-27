//#14 type alias in ts------Making Your Code Easier to Read & Maintain🚀--------
var product = {
    name: "laptop",
    price: 55000,
    quantity: 5
};
var calculateTotalPrice = function (product) {
    return "".concat(product.name, " total cost ").concat(product.price * product.quantity);
};
console.log(calculateTotalPrice(product));
