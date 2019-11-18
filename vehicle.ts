interface Vehicle {
    name: string;
    speed: number;
    gears?: number;
    
    applyBreaks(decrement: number): void;
}

class Car implements Vehicle {
    name: string;    
    speed: number;
    gears?: number;

    //construcor declarations(*)
    constructor();
    constructor(name: string, speed: number, gears: number);

    //construcor implementations(1)
    constructor(name?: string, speed?: number, gears?: number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBreaks(decrement: number): void {
        this.speed -= decrement;
        // throw new Error("Method not implemented.");
    }

}

let car1: Vehicle = new Car();
car1.name = 'Audi';
car1.speed = 200;
car1.gears = 7;
car1.applyBreaks(7);
console.log(car1);
car1.applyBreaks(100);
console.log(car1);

let car2: Vehicle = new Car('BMW', 100, 7);
console.log(car2);