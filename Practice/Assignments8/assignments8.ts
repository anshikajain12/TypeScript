//define an interface or type representing a product with properties for name,price quantity.
/* 
name:laptop
price:10000
quantity:5
*/

interface Products{
    name:string;
    price:number;
    quantity:number
}

const products:Products={
    name:"Laptop",
    price:10000,
    quantity:5
}
console.log(products)
console.log(products.name)


//calculate and return total price(price* quantity) of the product
const calculateTotalPrices=(product:Products)=>{
    return product.price *product.quantity;
}
console.log(`Total Price is: ${calculateTotalPrices(products)}`)

const product11:Products={
    name:"Mobile",
    price:5000,
    quantity:5
}
console.log(product11)
console.log(product11.name)
//using object destructuring
const calculateTotalPrices1=(product:Products)=>{
    const {price,quantity}= product;
    return price*quantity;
}
console.log(`Total Price is: ${calculateTotalPrices1(product11)}`)
