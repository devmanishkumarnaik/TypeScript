var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//#18 Unions and Intersections 
var userInput = function (value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid input data');
    }
};
//function call
console.log(userInput(10));
console.log(userInput("Subscribe"));
var user = { name: "Vinod", age: 29 };
var mylocation = { city: "Pune", country: "India" };
//define-----------------
var createUserProfile = function (user, mylocation) {
    return __assign(__assign({}, user), mylocation);
};
//call
var myCompleteInfo = createUserProfile(user, mylocation);
console.log(myCompleteInfo);
