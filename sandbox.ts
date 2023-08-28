let age: any = 25;

age = true;
age = "test";
age = { name: "mice" };

let mixed: any[] = [];

mixed.push("test");
mixed.push(11);
mixed.push(false);

let ninja: { name: any; age: any };

ninja = {
  name: "test",
  age: 22,
};

ninja = {
  name: 22,
  age: "test",
};
