//#20 Generics: Multiple Types------
function add<T,U>(a:T,b:U, c:boolean){
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}

const result1: void= add<number, string>(5, "thapa", true);
const result2: void = add<string, number>("Hello", 8, false);