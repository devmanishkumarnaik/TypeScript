//#9 : Understanding Optional and Default Parameters in TypeScript Functions


//func define/func declaration---here use default parameter
// const greet3 = (name:string, id:number = 1):string=>{
//     return `Welcome, ${name} and your id is ${id}`
// }

//here use optional parameter----
const greet3 = (name:string, id?:number):string=>{
    if(id){
        return `Welcome, ${name} and your id is ${id}`
    }else{
        return `Welcome, ${name}`
    }
}

//fun call/func invocation
const emp = greet3("vinod");
const emp2 = greet3("vinod", 2);
console.log(emp);
console.log(emp2);