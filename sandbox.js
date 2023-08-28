// explicit types
var character;
var age;
var isLoggined;
// character = 22; //Type 'number' is not assignable to type 'string'.
character = "name";
// age = "number"; //Type 'string' is not assignable to type 'number'.
age = 22;
// isLoggined="flase" //Type 'string' is not assignable to type 'boolean'.
isLoggined = true;
// arrays
var names;
var numbers;
var booleans;
// names = [1, 2, 3, 4]; //Type 'number' is not assignable to type 'string'.
names = ["abc", "def"];
// numbers = ["abc","def","ijk"]; //Type 'string' is not assignable to type 'number'.
numbers = [1, 2, 4, 5];
// booleans=["true" , "false" ]; //Type 'string' is not assignable to type 'boolean'.
booleans = [true, false, true];
// union types
var mixed = [];
mixed.push("hello");
mixed.push(12);
mixed.push(false);
console.log(mixed);
var uid;
uid = "test";
uid = 10;
// uid = false; //Type 'boolean' is not assignable to type 'string | number'.
// objects
var ninjaOne;
ninjaOne = { name: "test", age: 10, isLoggined: false };
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 10,
    haveAccount: false,
};
