class Invoice {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owns $ ${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice("mario", "work on the mario website", 250);
const invoiceTwo = new Invoice("john", "work on the market systme", 350);

let invoices: Invoice[] = [];

invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
