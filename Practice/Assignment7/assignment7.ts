function add<T>(a:T,b:T):void{
    console.log(typeof a);
    console.log(typeof b);
}
// const result1:void = add<number>(5,10);
// const result2:void = add<string>("Hello ","World"); 

function add1<T,U>(a:T,b:U):void{
    console.log(typeof a);
    console.log(typeof b);
}
const result3:void = add1<number,string>(5,"World");