//#29---Static properties and methods-----
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    //Now add method--
    MathOperations.add = function (num1, num2) {
        return num1 + num2;
    };
    MathOperations.subs = function (num1, num2) {
        return num1 - num2;
    };
    MathOperations.multi = function (num1, num2) {
        return num1 * num2;
    };
    MathOperations.division = function (num1, num2) {
        return num1 / num2;
    };
    MathOperations.mod = function (num1, num2) {
        return num1 % num2;
    };
    MathOperations.PI = Math.PI; // Properties
    return MathOperations;
}());
console.log(MathOperations.PI);
console.log(MathOperations.add(9, 6));
console.log(MathOperations.subs(9, 6));
console.log(MathOperations.multi(9, 6));
console.log(MathOperations.division(9, 6));
console.log(MathOperations.mod(9, 6));
