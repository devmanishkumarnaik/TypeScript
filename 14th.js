var student1 = {
    name: "Vinod",
    age: 29,
    greet: function (country) { return "Welcome My name is ".concat(student1.name, ", I am ").concat(student1.age, "yrs old & I am from ").concat(country); }
};
var student2 = {
    name: "Manish",
    age: 21,
    greet: function (country) { return "Welcome My name is ".concat(student2.name, ", I am ").concat(student2.age, "yrs old & I am from ").concat(country); }
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome My name is ".concat(name, ", I am ").concat(age, "yrs old");
};
//console.log(introduction(student1));
console.log(student1.greet("India"));
console.log(student2.greet("India"));
