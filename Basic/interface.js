"use strict";
const Product1 = {
    name: "PC",
    price: 50000,
    quantity: 50
};
const calculateTotalPrice = (product) => {
    const { price, quantity } = product;
    return `${price * quantity} `;
};
const res = calculateTotalPrice(Product1);
console.log(res);
