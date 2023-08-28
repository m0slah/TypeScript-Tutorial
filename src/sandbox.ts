let greet: Function;

greet = () => {
  console.log("hello");
};

const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b); // return type is inferred as 'number' by TypeScript compiler when no explicit return statement exists in the function body
};

add(5, 8);

const minus = (a: number, b: number) => {
  return a - b;
};

let result = minus(8, 4);

console.log(result);
