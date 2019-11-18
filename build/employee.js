var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    return Employee;
}());
var emp = new Employee(1, 'Anish', 1000);
console.log(emp);
