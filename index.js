/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
>>
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
>>
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
>>
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
>>
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
>>
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
>> DONE
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
*/
// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const renderTeamCards = require('./src/html-template.js');

//Lib Requires
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// CONSTANTS DECLARATION






var employeeList = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Success! Information transferred to the README!");
  });
}
function addEmployees() {
  const teamMenu = [
    {
      type: "list",
      name: "erusandi",
      message: "Build your team!",
      choices: ['Engineer', 'Intern', 'DONE'],
    },
  ];
  inquirer.prompt(teamMenu).then(userInput => {
    switch (userInput.erusandi) {
      case 'Engineer':
        createEngineer();
        break;
      case 'Intern':
        createIntern();
        break;
      case 'DONE':
        generateHTML();
    }
  })
}
//Text Based Input Functions ( cuz they overlap otherwise )
const createManager = () => {
  const managerQuestions = [
    {
      //name
      type: "input",
      name: "name",
      message: "What is the Managers name:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("dont leave your employees unnamed!? (err: add name)");
          return false;
        }
      },
    },
    {
      //ID
      type: "input",
      name: "id",
      message: "What is the Managers ID:",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log(
            "dont leave your employees without an idenfier!? (err: add id)"
          );
          return false;
        }
      },
    },
    {
      //Email
      type: "input",
      name: "email",
      message: "What is the Managers email:",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log(
            "dont leave your employees without communication means!? (err: add email)"
          );
          return false;
        }
      },
    },
    {
      //office
      type: "input",
      name: "office",
      message: "What is the managers office:",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("no office? (err: add office)");
          return false;
        }
      },
    },
  ];
  inquirer.prompt(managerQuestions).then(userInput => {
    newManager = new Manager(
      userInput.name,
      userInput.id,
      userInput.email,
      userInput.office
    );
    employeeList.push(newManager);
    console.log(employeeList);
    addEmployees();
  });
}
const createIntern = () => {
  const internQuestions = [
    {
      //name
      type: "input",
      name: "name",
      message: "What is the Intern name:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("dont leave your Intern unnamed!? (err: add name)");
          return false;
        }
      },
    },
    {
      //ID
      type: "input",
      name: "id",
      message: "What is the Intern ID:",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log(
            "dont leave your employees without an idenfier!? (err: add id)"
          );
          return false;
        }
      },
    },
    {
      //Email
      type: "input",
      name: "email",
      message: "What is the Intern email:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "dont leave your employees without communication means!? (err: add email)"
          );
          return false;
        }
      },
    },
    {
      //School
      type: "input",
      name: "School",
      message: "What is the engineers Github:",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("dont leave your Interns schoolless!? (err: add school)");
          return false;
        }
      },
    },
  ];
  inquirer.prompt(internQuestions).then(userInput => {
    newIntern = new Intern(
      userInput.name,
      userInput.id,
      userInput.email,
      userInput.School
    );
    employeeList.push(newIntern);
    addEmployees();
  });
}
const createEngineer = () => {
  const engineerQuestions = [
    {
      //name
      type: "input",
      name: "name",
      message: "What is the employees name:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("dont leave your employees unnamed!? (err: add name)");
          return false;
        }
      },
    },
    {
      //ID
      type: "input",
      name: "id",
      message: "What is the employees ID:",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log(
            "dont leave your employees without an idenfier!? (err: add id)"
          );
          return false;
        }
      },
    },
    {
      //Email
      type: "input",
      name: "email",
      message: "What is the employees email:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "dont leave your employees without communication means!? (err: add email)"
          );
          return false;
        }
      },
    },
    {
      //GitHub
      type: "input",
      name: "Github",
      message: "What is the engineers Github:",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("dont leave your Engineer's Github!? (err: add github)");
          return false;
        }
      },
    },
  ];
  inquirer.prompt(engineerQuestions).then(userInput => {
    employeeList.push(
      newEngineer = new Engineer(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.Github
      )
    );
    addEmployees();
  });
}
function generateHTML(){
  console.log(employeeList);
  fs.writeFile("./dist/index.html", renderTeamCards(employeeList)), (err, log_stack) => {
    if (err)
      console.log(err);
    else {
      console.log("successfully generated HTML")
    }
  }
}
// TODO: Create a function to initialize app
function init() {
  
  createManager();
}

// Function call to initialize app *when you are ceating your object*
init();
// CONSTANTS DECLARATION END
//VARIABLE DECLARATION END
//MAIN CODE
