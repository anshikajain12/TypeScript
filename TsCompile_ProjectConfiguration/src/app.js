"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_ts_1 = require("./index.ts");
var a = 10;
var b = 20;
console.log(a + b);
console.log(index_ts_1.person.name);
//todo update object properties
index_ts_1.person.address.city = "Jalesar";
// obj.address.city=10; --->invalid
console.log(index_ts_1.person);
