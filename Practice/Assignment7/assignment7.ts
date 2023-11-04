// function add<T>(a:T, b:T):T{
//     return a + b;
// }
// console.log(add("Hello","Good Morning"));
console.log(add(3,4));
function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
    return x + y;
}
add(2,3);