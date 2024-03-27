//#29---Static properties and methods-----
class MathOperations{
    public static PI: number = Math.PI;// Properties

    //Now add method--
    public static add(num1: number, num2: number){
        return num1+num2;
    }

    public static subs(num1: number, num2: number){
        return num1-num2;
    }

    public static multi(num1: number, num2: number){
        return num1*num2;
    }

    public static division(num1: number, num2: number){
        return num1/num2;
    }

    public static mod(num1: number, num2: number){
        return num1%num2;
    }
}

console.log(MathOperations.PI);
console.log(MathOperations.add(9,6));
console.log(MathOperations.subs(9,6));
console.log(MathOperations.multi(9,6));
console.log(MathOperations.division(9,6));
console.log(MathOperations.mod(9,6));