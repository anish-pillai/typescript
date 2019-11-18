var Car = /** @class */ (function () {
    //construcor implementations(1)
    function Car(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    Car.prototype.applyBreaks = function (decrement) {
        this.speed -= decrement;
        // throw new Error("Method not implemented.");
    };
    return Car;
}());
var car1 = new Car();
car1.name = 'Audi';
car1.speed = 200;
car1.gears = 7;
car1.applyBreaks(7);
console.log(car1);
car1.applyBreaks(100);
console.log(car1);
var car2 = new Car('BMW', 100, 7);
console.log(car2);
