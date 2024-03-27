//#6: Differences ANY vs UNKOWN Types 


//Any
let myfavNum: any = 5;
myfavNum = "Vinod";
myfavNum = true;

//Unknown
let num2:unknown;
num2 = 5;
num2 = "thapa";
num2 = true;

if(typeof num2 === "number"){
    console.log(num2+5);
}else if(typeof num2 === "boolean"){
    console.log(num2);
}

//HomeWork do it---- fetch from api
async function fetchData(): Promise<unknown>{
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}

async function processData(){
    const response = await fetchData();

    if(typeof response === 'object'){
        //Perform the operations on the response object
    }
}