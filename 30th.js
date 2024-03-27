//#32---Type Narrowing-----
var favHobbies = function (hobby) {
    //return hobby.map(()=>{});
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(function () { });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("coding");
favHobbies(["coding", "games"]);
