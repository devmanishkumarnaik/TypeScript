//#30--- Abstract Classes------
abstract class Shape{
    constructor(protected color: string){}

    abstract calculateArea(): number;
    abstract displayArea:()=> void;
}

class Circle extends Shape{
    constructor(protected color: string, protected radius: number){
        super(color);
    }

    public calculateArea(): number {
        return Math.PI * this.radius*this.radius;
    }

    displayArea = () => {
      console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
    }
}

const circle = new Circle("red",5);
console.log(circle.calculateArea());
circle.displayArea;

//Home Work-----------
//You need to do the same for Square and rectangle and if possible use getter and setter methods or static members