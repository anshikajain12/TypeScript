//using ALiases
//create a product object:
//define a product with properties for name, price quantity create a product obj with data:
/* 
name:laptop
price:10000
quantity:5
*/
/* 
name:mobile
price:1000
*/
type Product = {
  name: string;
  price: number;
  quantity: number;
};

const product1: Product = {
  name: "Laptop",
  price: 10000,
  quantity: 5,
};

const product2: Product = {
  name: "Mobile",
  price: 1000,
  quantity: 50,
};

//calculate total price:
//given the product object . write a function called calculateToTalPrice that calculates and return the total price(price * quantity) of the product
function calculateTotalPrice(products:Product): string {
  return `price is ${products.price} and quantity ${products.quantity} of the product 
Total price of product is: ${products.price * products.quantity} 
`;
}
let totalPriceOfProduct1 = calculateTotalPrice(product1);
console.log(totalPriceOfProduct1);
let totalPriceOfProduct2 = calculateTotalPrice(product2);
console.log(totalPriceOfProduct2);
