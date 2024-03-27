//#17: TypeScript Tuples🔥Mastering Data Structures
//Function to display person information
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLicense = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Driver's License: ").concat(hasDriverLicense ? "Yes" : "No"));
};
//Example Usage
var person1 = ['vinod', 29, true];
var person2 = ['thapa', 27, false];
person1.push("coding");
console.log(person1);
displayPersonInfo(person1);
displayPersonInfo(person2);
