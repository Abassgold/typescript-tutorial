import {Invoice} from "./classes/invoice.js"
import {Payment} from './classes/payment/payment.js'
import {HasFormater,HasFormater1} from './classes/Interface/HasFormertter.js'
// let names = ['kola', 'bisi', 'azeez', 4, true]
// names.push("kiioio")
// names.push(false)

// let ninja = {
//     name: 'azeez',
//     second: ' abass',
//     age: 30
// }
// ninja={
//     name: 'wuuywj',
//     second: 'jhujhyyyyyy',
//     age: 70,
// }

// explicit types
// let character : string;
// let age : number;
// let isLogged : boolean;
// age = 30
// // arrays
// let ninja: string[] = []
// ninja.push('ababsb')
// console.log(ninja);

//Union types
// let mixed: (string|number|boolean)[] = []
// mixed.push('ababsb')
// mixed.push(false)
// mixed.push(20)
// console.log(mixed);

// let uid : string|number;
// uid = 'false'

//objects
//type any
// let age : any = 'uosduiosdi'
// age= 2
// console.log(age);

// let greeting : Function;
// greeting = () =>{
//     console.log('hello world');
// },
// greeting();

// const add = (a:number, b:number, c:(number | string) = 10) : void =>{
//     console.log(a+b)
//     console.log(c);
    
// }
// add(4,5,'50')

// const minus = (a:number, b:number, ): number =>{
//     return a+b;
// }
// let result = minus(5, 50)

//Type Aliases
type StringOrNum = string|number;
type objWithName = {name: string, uid: StringOrNum}


const logDetaills = (uid: StringOrNum, items: string)=>{
console.log(`${items} has a uid of ${uid}`);

}
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
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
 const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc : HasFormater;
if(type.value === 'invoice'){
  doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
}
else{
  doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
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

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);
console.log(invoices);
let result =invoices.forEach(inv => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
})

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);

enum Direction {
  Up = 1,
  Down,  // Inherits value from Up (Up + 1) which is 2
  Left,  // Inherits value from Down (Down + 1) which is 3
  Right, // Inherits value from Left (Left + 1) which is 4
}

let currentDirection: Direction = Direction.Up;
console.log(currentDirection); 


enum Status {
  "Success" = "OK",
  "Pending" = "PENDING",
  "Failed" = "FAILED",
}

let orderStatus: Status = Status.Success;
console.log(orderStatus); // Output: "OK"

enum Weekend {
  Saturday = 6,
  Sunday = "FUN",
}

let weekendDay: Weekend = Weekend.Sunday;
console.log(weekendDay); // Output: "FUN"


