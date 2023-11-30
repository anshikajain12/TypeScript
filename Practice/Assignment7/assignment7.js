"use strict";
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
// const result1:void = add<number>(5,10);
// const result2:void = add<string>("Hello ","World"); 
function add1(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result3 = add1(5, "World");
