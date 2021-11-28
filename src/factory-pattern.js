function Tester(name) {
  this.name = name;
  this.type = "tester";
}

function Developer(name) {
  this.name = name;
  this.type = "developer";
}

class EmployeeFactory {
  create(name, type) {
    this.name = name;
    switch (type) {
      case 1:
        return new Tester(name);
      case 2:
        return new Developer(name);
      default:
        return new Tester(name);
    }
  }
}

function sayHi() {
  console.log(`Hi, my name is ${this.name}, and I'm a ${this.type}`);
}
const employeeFactory = new EmployeeFactory();
const employee1 = employeeFactory.create("Bob", 1);
const employee2 = employeeFactory.create("Tim", 2);

sayHi.call(employee1);
sayHi.call(employee2);
