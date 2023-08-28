"use strict";
class Invoice {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owns $ ${this.amount} for ${this.details}`;
    }
}
const invoiceOne = new Invoice("mario", "work on the mario website", 250);
const invoiceTwo = new Invoice("john", "work on the market systme", 350);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
