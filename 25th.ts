//#27----Getter and Setter Methods---------------------------
class Personss{
    private _age: number | undefined;
    constructor(
        public name: string,
        protected hobbies: string[]
    ){}

    public set age(age: number){
        if(age>150 || age<0){
            throw new Error("age is not valid");
        }
        this._age = age;
    }

    public get age(): number{
        if(this._age === undefined){
            throw new Error("age is not defined");
        }
        return this._age;
    }

    introduceParent():string{
        return `Hi, I'm ${this.name} and I'm ${this._age} years old. I love ${this.hobbies.join(",")}.`
    }
}

const persons11: Personss = new Personss("vinod",["drawing", "painting"]);
persons11.age = 412;
console.log(persons11.introduceParent());
console.log(persons11.age);