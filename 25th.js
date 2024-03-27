//Getter and Setter Methods---------------------------
var Personss = /** @class */ (function () {
    function Personss(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Personss.prototype, "age", {
        get: function () {
            if (this._age === undefined) {
                throw new Error("age is not defined");
            }
            return this._age;
        },
        set: function (age) {
            if (age > 150 || age < 0) {
                throw new Error("age is not valid");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Personss.prototype.introduceParent = function () {
        return "Hi, I'm ".concat(this.name, " and I'm ").concat(this._age, " years old. I love ").concat(this.hobbies.join(","), ".");
    };
    return Personss;
}());
var persons11 = new Personss("vinod", ["drawing", "painting"]);
persons11.age = 412;
console.log(persons11.introduceParent());
console.log(persons11.age);
