//#18 Unions and Intersections 
const userInput =(value: string | number)=>{
    if(typeof value === 'number'){
        return value*2
    }else if(typeof value === "string"){
        return value.toUpperCase();
    }else{
        throw new Error('Invalid input data')
    }
}


//function call
console.log(userInput(10))
console.log(userInput("Subscribe"))

//Intersaction---------------------------------
// type Person = {
//     name:String;
//     age:number
// }
// type Employee = {
//     emp_id: number;
//     department: String
// }

// type EmployeeDetails = Person & Employee;

// const employee:EmployeeDetails={
//     name: 'Vinod',
//     age: 29,
//     emp_id: 1111,
//     department: "IT"
// }

//Intersaction Examples------------------------------------------------------------------
type User = {
    name: String;
    age: number
}

type MyLocation = {
    city: String;
    country: String
}

const user: User = {name: "Vinod", age: 29};
const mylocation: MyLocation= {city: "Pune", country: "India"}

//define-----------------
const createUserProfile = (user:User, mylocation:MyLocation)=>{
     return {...user, ...mylocation}
}

//call
const myCompleteInfo: User & MyLocation = createUserProfile(user, mylocation);
console.log(myCompleteInfo);


//Homework ------------???-------------------------------------------------------
//Try different types of union and intersaction typescript example from internert and solve it.
