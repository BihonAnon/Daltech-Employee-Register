const Employee = require('./Employee')
class Manager extends Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
    this.role = 'manager';
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}
module.exports = Manager
// const manager1 = new Manager('dicknson', 'dicknsun@gmail.com', 'TheBigBoy', '001');
// manager1.printInfo();
