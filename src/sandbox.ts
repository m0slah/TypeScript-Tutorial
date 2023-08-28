type StringOrNumber = string | number;
type ObjectWithName = { name: string; uid: StringOrNumber };

const logDetails = (uid: StringOrNumber, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: ObjectWithName) => {
  console.log(`${user} say hello`);
};

const greetAgain = (user: ObjectWithName) => {
  console.log(`${user} say hello`);
};



// logDetails(1, "acc");

// const username = greet({ name: "muhammed", uid: 11 });
// console.log(username);
