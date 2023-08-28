"use strict";
// let greet: Function;
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} say ${greeting}`);
};
// example 2
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === "add") {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
