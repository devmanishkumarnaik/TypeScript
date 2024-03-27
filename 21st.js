//OOP in TS
//class----and----constructor----------------------
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Persons;
}());
var persons1 = new Persons("vinod", 12, ["reading", "painting"]);
var persons2 = new Persons("ashis", 11, ["coding", "sports"]);
var persons3 = new Persons("thapa", 13, ["gym", "watch movies"]);
console.log(persons1);
console.log(persons2);
console.log(persons3);
