//#31---Types vs Interfaces-----------
//Type--------------------------------------------
// type Stud = {
//     name: string;
//     age: number;
// };

// type StudAddr = {
//     city: string;
//     state: string;
// }

// type Data = Stud | StudAddr;

// const BioData: Data = {
//     name: "Vinod",
//     age: 29,
//     state: "MH"
// };

// console.log(BioData);

//Interface--------------------------------------------------------------------
//Interface is better than Type So use Interface---***---
interface Stud{
    name: string;
    age: number;
};

interface StudAddr{
    city: string;
    state: string;
}

interface Data extends Stud, StudAddr{}

const BioData: Data ={
    name: "Vinod",
    age: 29,
    city: "Pune",
    state: "MH"
};

console.log(BioData);