//#16 Enums---------------------------
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Vinod",
    email: "thapa@gmail.com",
    password: "qwqe",
    role: Roles.admin
};
var user2 = {
    email: "vinod@gmail.com",
    password: "zwqe",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, role = user.role;
    return role === "admin" ? "".concat(email, " is allow to edit the website") : "".concat(email, " is not allow to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
