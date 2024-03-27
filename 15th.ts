//#16 Enums---------------------------
enum Roles{
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name? :String;
    email: String;
    password: String;
    role:Roles
}

const user1:LoginDetails = {
    name: "Vinod",
    email:"thapa@gmail.com",
    password: "qwqe",
    role:Roles.admin
}

const user2:LoginDetails = {
    email:"vinod@gmail.com",
    password: "zwqe",
    role:Roles.user
}

const isAdmin: (user: LoginDetails)=> string =  (user:LoginDetails):string=>{
    const {name,email, role} = user;
    return role === "admin" ? `${email} is allow to edit the website` : `${email} is not allow to edit the website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
