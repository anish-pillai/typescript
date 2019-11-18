import { Employee } from './employee.js';

console.log('Hello Typescript');

var x;

x = 10;
x = 'Hello';

var y = 10; // number => Type Inference
// y = 'ABC'; // Err

var z: string;
z = 'Hello';
// z = 10; // Err

var user: { id: number, name: string, location?: string }; // Location is optional

user = { id: 1, name: 'Anish' }

let emp = new Employee(1, 'Anish', 1000);
console.log(emp);