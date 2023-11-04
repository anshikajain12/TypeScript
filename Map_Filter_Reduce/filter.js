"use strict";
const numbersFilter = [1, 2, 3, 4, 5];
//find values greater than 2
const filterArray = numbersFilter.filter((value) => value > 2);
console.log(filterArray);
//find values which are even
const even = numbersFilter.filter((value) => value % 2 === 0);
console.log(even);
/*
given an array of string create a new array that contains only
the string with length geater than 4
*/
const names1 = ["Alice", "Bob", "Anna", "andrew", "Alex"];
const namesFilterArray = names1.filter((str) => str.length > 3);
console.log(namesFilterArray);
//given an array of string filter out the names of the letter with 'A'
const namesFilterArray1 = names1.filter((str) => str.startsWith('A'));
console.log(namesFilterArray1);
