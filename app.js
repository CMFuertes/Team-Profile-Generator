const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const myTeam = []

function newEmployees() {

    return inquirer
        .prompt([

            {
                type: "list",
                name: "position",
                message: "Please select your role",
                choices: ["Engineer", "Manager", "Intern", "Done"]
            }

        ]).then(userChoice => {
            switch (userChoice.position) {
                case "Manager":
                    return addManager();
                    break;

                case "Engineer":
                    return addEngineer();
                    break;

                case "Intern":
                    return addIntern();
                    break;

                case "Done":
                    return teamBuild();
                    break

            }
        })


    function addManager() {

        return inquirer
            .prompt([

                {
                    type: "input",
                    message: "Please enter your name",
                    name: "managerName",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                },

                {
                    type: "input",
                    message: "Please enter your employee ID?",
                    name: "managerID",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a positive number greater than zero.";
                    }
                },

                {
                    type: "input",
                    message: "Please enter your email?",
                    name: "managerEmail",
                    validate: answer => {
                        const validEmail = answer.match(/\S+@\S+\.\S+/);
                        if (validEmail) { return true; }
                        return "Please enter a valid email address.";
                    },
                },

                {
                    type: "input",
                    message: "Please enter your office number?",
                    name: "managerOfficeNumber",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a positive number greater than zero.";
                    }
                }

            ]).then(userChoice => {
                console.log(userChoice);

                const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)

                myTeam.push(manager)

                return newEmployees();

            })


    }


    function addEngineer() {
        return inquirer
            .prompt([

                {
                    type: "input",
                    message: "Please enter your name?",
                    name: "engineerName",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                },

                {
                    type: "input",
                    message: "Please enter your employee ID?",
                    name: "engineerID",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a positive number greater than zero.";
                    }
                },

                {
                    type: "input",
                    message: "Please enter your email?",
                    name: "engineerEmail",
                    validate: answer => {
                        const validEmail = answer.match(/\S+@\S+\.\S+/);
                        if (validEmail) { return true; }
                        return "Please enter a valid email address.";
                    },
                },

                {
                    type: "input",
                    message: "Please enter your Github username",
                    name: "gitHubUsername",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                }
            ]).then(userChoice => {
                console.log(userChoice);

                const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)

                myTeam.push(engineer)

                return newEmployees();

            })
    }




    function addIntern() {

        return inquirer
            .prompt([

                {
                    type: "input",
                    message: "Please enter your name?",
                    name: "internName",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                },

                {
                    type: "input",
                    message: "Please enter your employee ID?",
                    name: "internID",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Please enter a positive number greater than zero.";
                    }
                },

                {
                    type: "input",
                    message: "Please enter your email?",
                    name: "internEmail",
                    validate: answer => {
                        const validEmail = answer.match(/\S+@\S+\.\S+/);
                        if (validEmail) { return true; }
                        return "Please enter a valid email address.";
                    },
                },

                {
                    type: "input",
                    message: "Please enter your school?",
                    name: "internSchool",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "Please enter at least one character.";
                    }
                }
            ]).then(userChoice => {
                console.log(userChoice);

                const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)

                myTeam.push(intern)

                return newEmployees();
            })
    }
}

newEmployees()
function teamBuild() {
    let fileHtml = render(myTeam);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, fileHtml, 'utf-8')
}
module.exports = myTeam
