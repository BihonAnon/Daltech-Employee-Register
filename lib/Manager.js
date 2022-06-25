const Employee = require('./Employee')
class Manager extends Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    this.role = 'manager';
  }

  printInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`id: ${this.id}`);
    console.log(`officeNumber: ${this.officeNumber}`);
    console.log (`Role: ${this.role}`);
  }
}

const manager1 = new Manager('dicknson', 'dicknsun@gmail.com', 'TheBigBoy', '001');
manager1.printInfo();
