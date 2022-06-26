class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email) {
    this.role = "Employee";
    this.name = name;
    this.email = email;
    this.id = id;
  }
  getName() {
    console.log(`Name: ${this.name}`);
    return this.name;
  }
  getId() {
    console.log(`Id: ${this.id}`);
    return this.id;
  }
  getRole() {
    console.log(`Role: ${this.role}`)
    return 'Employee';
  }
  getEmail() {
    return this.email;
  }
  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Id: ${this.id}`);
    console.log(`Role: ${this.role}`);
  }
}
module.exports = Employee
// const employee1 = new Employee("tyrone", "bbb@gmail.com", "Deez");
// employee1.printInfo();
