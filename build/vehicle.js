class Car {
    //construcor implementations(1)
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBreaks(decrement) {
        this.speed -= decrement;
        // throw new Error("Method not implemented.");
    }
}
let car1 = new Car();
car1.name = 'Audi';
car1.speed = 200;
car1.gears = 7;
car1.applyBreaks(7);
console.log(car1);
car1.applyBreaks(100);
console.log(car1);
let car2 = new Car('BMW', 100, 7);
console.log(car2);
