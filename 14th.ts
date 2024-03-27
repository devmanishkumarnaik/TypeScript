//#15 call signatures----------------------------
type Student = {
    name: string;
    age: number;
    gender?:string;
    greet: (country:string)=>string //method call signature
    //(country:string):string //pure call signature ----finally not used it , problem in future time but once , try it.....
}

const student1: Student ={
    name: "Vinod",
    age: 29,
    greet: (country):string=> `Welcome My name is ${student1.name}, I am ${student1.age}yrs old & I am from ${country}`
}

const student2: Student ={
    name: "Manish",
    age: 21,
    greet: (country):string=> `Welcome My name is ${student2.name}, I am ${student2.age}yrs old & I am from ${country}`
}

const introduction: (student1: Student)=>string = (student1:Student): string=>{
    const {name, age} = student1;
    return `Welcome My name is ${name}, I am ${age}yrs old`;
}

//console.log(introduction(student1));
console.log(student1.greet("India"));
console.log(student2.greet("India"));