class Employee {
    constructor(
        public id?: number, 
        public name?: string, 
        public salary?: number) {

    }
}

let emp = new Employee(1, 'Anish', 1000);
console.log(emp);