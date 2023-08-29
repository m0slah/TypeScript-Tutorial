var me = {
    name: "shaun",
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("i spend " + amount);
        return amount;
    },
};
var greetPerson = function (person) {
    console.log("hello " + person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from "./classes/Invoice.js";
var invOne = new Invoice("mario", "work on the mario website", 250);
var invTwo = new Invoice("luigi", "work on the luigi website", 300);
// invOne.client = 'yoshi';
// invOne.amount = 50;
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
var form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
