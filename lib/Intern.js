const Employee = require('./Employee')
class Intern extends Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = 'Intern';
  }
  getSchool() {
    return this.school
  }
  getRole() {
    return 'Intern'
  }
}
module.exports = Intern
// const manager1 = new Intern('dicknson', '001', 'email', 'UCLA');
// console.log(manager1);
