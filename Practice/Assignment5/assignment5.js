"use strict";
const product1 = {
    name: "Laptop",
    price: 10000,
    quantity: 5,
};
const product2 = {
    name: "Mobile",
    price: 1000,
    quantity: 50,
};
//calculate total price:
//given the product object . write a function called calculateToTalPrice that calculates and return the total price(price * quantity) of the product
function calculateTotalPrice(products) {
    return `price is ${products.price} and quantity ${products.quantity} of the product 
Total price of product is: ${products.price * products.quantity} 
`;
}
let totalPriceOfProduct1 = calculateTotalPrice(product1);
console.log(totalPriceOfProduct1);
let totalPriceOfProduct2 = calculateTotalPrice(product2);
console.log(totalPriceOfProduct2);
