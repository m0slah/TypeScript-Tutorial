"use strict";
let greet;
greet = () => {
    console.log("hello");
};
const add = (a, b, c) => {
    console.log(a + b); // return type is inferred as 'number' by TypeScript compiler when no explicit return statement exists in the function body
};
add(5, 8);
const minus = (a, b) => {
    return a - b;
};
let result = minus(8, 4);
console.log(result);
