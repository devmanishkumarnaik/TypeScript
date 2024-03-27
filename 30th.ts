//#32---Type Narrowing-----
const favHobbies = (hobby: string | string[]): void[] | undefined=>{
    //return hobby.map(()=>{});
    if(typeof hobby === "object" && Array.isArray(hobby)){
        return hobby.map((): void=>{});
    }else{
        console.log(hobby);
    }
}

favHobbies("coding");
favHobbies(["coding","games"]);