//#6: Differences ANY vs UNKOWN Types 
//Any
var myfavNum = 5;
myfavNum = "Vinod";
myfavNum = true;
//Unknown
var num2;
num2 = 5;
num2 = "thapa";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
