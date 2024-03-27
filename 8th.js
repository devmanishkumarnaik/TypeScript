//#9 : Understanding Optional and Default Parameters in TypeScript Functions
//func define/func declaration---here use default parameter
// const greet3 = (name:string, id:number = 1):string=>{
//     return `Welcome, ${name} and your id is ${id}`
// }
//here use optional parameter----
var greet3 = function (name, id) {
    if (id) {
        return "Welcome, ".concat(name, " and your id is ").concat(id);
    }
    else {
        return "Welcome, ".concat(name);
    }
};
//fun call/func invocation
var emp = greet3("vinod");
var emp2 = greet3("vinod", 2);
console.log(emp);
console.log(emp2);
