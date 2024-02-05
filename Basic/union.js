"use strict";
const userInput = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error("Invalid input");
    }
};
let res1 = userInput("Shubham");
let res2 = userInput(25);
console.log(res1);
console.log(res2);
