//you are building a simple application. need to store product information
//define a tuple type called productInfo to represent each product containing the following elements:
/**
 * product name(string)
 * price(number)
 * quantity (number)
 */

type ProductInfo = [string, number, number];

const products1: ProductInfo = ["laptop", 2000, 2];
const products2: ProductInfo = ["mobile", 1000, 20];

const displayFunc = (products: ProductInfo) => {
  const [productName, price, quantity] = products;
  console.log(
    `Product Name is: ${productName}, price is: ${price},Quantity is: ${quantity}`
  );
};
displayFunc(products1);
displayFunc(products2)
