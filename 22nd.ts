//Inheritance---------------------
class Persons {
    name: string;
    age: number;
    hobbies: string[];

constructor(name: string, age: number, hobbies: string[]){
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string{
    return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(",")}.`;
  }
}

class Students extends Persons{
    grade: number;
    constructor(name: string, age: number, hobbies: string[],grade:number){
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce(): string{
        return `${super.introduce()} I am in grade ${this.grade}`;
      }
}

const persons1: Persons = new Persons("vinod",12, ["reading", "painting"]);
const persons2: Persons = new Persons("ashis",11, ["coding", "sports"]);
const persons3: Persons = new Persons("thapa",13, ["gym", "watch movies"]);
const students1: Persons = new Students("thapa",13, ["gym", "watch movies"],89);

console.log(persons1);
console.log(persons2);
console.log(persons3);

console.log(persons3.introduce());
console.log(students1.introduce());