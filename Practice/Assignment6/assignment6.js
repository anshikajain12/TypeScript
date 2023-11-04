"use strict";
//you are building a simple application. need to store product information
//define a tuple type called productInfo to represent each product containing the following elements:
/**
 * product name(string)
 * price(number)
 * quantity (number)
 */
const products1 = ["laptop", 2000, 2];
const products2 = ["mobile", 1000, 20];
const displayFunc = (products) => {
    const [productName, price, quantity] = products;
    console.log(`Product Name is: ${productName}, price is: ${price},Quantity is: ${quantity}`);
};
displayFunc(products1);
displayFunc(products2);
