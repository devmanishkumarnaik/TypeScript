var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Inheritance---------------------
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduce = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join(","), ".");
    };
    return Persons;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    Students.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), " I am in grade ").concat(this.grade);
    };
    return Students;
}(Persons));
var persons1 = new Persons("vinod", 12, ["reading", "painting"]);
var persons2 = new Persons("ashis", 11, ["coding", "sports"]);
var persons3 = new Persons("thapa", 13, ["gym", "watch movies"]);
var students1 = new Students("thapa", 13, ["gym", "watch movies"], 89);
console.log(persons1);
console.log(persons2);
console.log(persons3);
console.log(persons3.introduce());
console.log(students1.introduce());
