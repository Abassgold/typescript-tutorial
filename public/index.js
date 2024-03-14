import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/payment/payment.js';
const logDetaills = (uid, items) => {
    console.log(`${items} has a uid of ${uid}`);
};
// let greet: Function;
// example 1
// let gret: (a: string, b: string) => void;
// gret = (name: string, greeting: string) => {
//   console.log(`${name} says ${greeting}`);
// }
// // example 2
// let calc: (a: number, b: number, c: string) => number;
// calc = (numOne: number, numTwo: number, action: string) => {
//   if (action === 'add') {
//     return numOne + numTwo;
//   } else {
//     return numOne - numTwo;
//   }
// }
// // example 3
// let logDetails: (obj: {name: string, age: number}) => void;
// logDetails = (ninja: {name: string, age: number}) => {
//   console.log(`${ninja.name} is ${ninja.age} years old`);
// }
// const greet = (user:objWithName)=>{
//     console.log(`${user.name} say hello`);
// }
// // function signatures 
// // Function signature example
// function add(x: number, y: number): number  {
//     return x + y;
// }
// // Function signature defined using a type alias
// type AddFunction = (x: number, y: number) => number;
// // Interface with a function signature
// interface Calculator {
//     add: (x: number, y: number) => number;
// }
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form');
const form = document.querySelector('.new-item-form');
const type = document.querySelector("#type");
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// let docOne: HasFormater1;
// let docTwo: HasFormater;
// docOne = new Invoice('Abass', 'We Dev', 500)
// docTwo = new Payment('Kolawole', 'WeDev', 7500)
// let docs: (HasFormater1| HasFormater)[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
const invOne = new Invoice('azeez', 'work on the Abass website', 250);
const invTwo = new Invoice('kola', 'work on the Kolawole website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
let result = invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { title: 'name of the wind' }
};
console.log(docOne);
console.log(docTwo);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let currentDirection = Direction.Up;
console.log(currentDirection);
var Status;
(function (Status) {
    Status["Success"] = "OK";
    Status["Pending"] = "PENDING";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
let orderStatus = Status.Success;
console.log(orderStatus); // Output: "OK"
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Saturday"] = 6] = "Saturday";
    Weekend["Sunday"] = "FUN";
})(Weekend || (Weekend = {}));
let weekendDay = Weekend.Sunday;
console.log(weekendDay); // Output: "FUN"
