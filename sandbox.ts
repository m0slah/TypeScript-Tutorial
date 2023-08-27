// const character = "Slah";

// console.log(character);

// const inputs = document.querySelectorAll("input");

// console.log(inputs);

// inputs.forEach((input) => {
//   console.log(input);
// });

let character = "MO";
let age = 22;
let isBlackBelt = true;

// character = 22; //Type 'number' is not assignable to type 'string'
character = "Mohammed";

// age = "20";  //Type 'string' is not assignable to type 'number'.
age = 20;

// isBlackBelt="False" //Type 'string' is not assignable to type 'boolean'.
isBlackBelt = false;

const circ = (diameter: string) => {
  return diameter * Math.PI;
};

console.log(circ(3));
