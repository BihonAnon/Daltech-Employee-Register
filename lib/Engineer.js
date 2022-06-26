const Employee = require('./Employee')
class Engineer extends Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
    this.role = 'Engineer';
  }
  getGithub() {
    return this.github;
  }
  getRole(){
    return 'Engineer'
  }
}
module.exports = Engineer
// const manager1 = new Manager('dicknson', 'dicknsun@gmail.com', 'TheBigBoy', '001');
// manager1.printInfo();
