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