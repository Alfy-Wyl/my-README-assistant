const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// create obects within an array for this section
const questions = [
    // Title section
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"   
    },

    // Description section
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project?"   
    },
    
    //Installation section
    {
        type: "input",
        name: "installation",
        message: "How is the program installed? Please provide information on all required softwares and commands",
        default: "npm i"  
    },

    // Usage section
    {
        type: "input",
        name: "usage",
        message: "How is the program used?",
        default: "npm i"  
    },

    // License section
    {
        type: "list",
        name: "license",
        message: "Select a license for your project?",
        choices: [
            "Apache license 2.0",
            "Boost Software License 1.0",
            "Creative Commons Attribution 4.0",
            "European Union Public License 1.1",
            "GNU General Public License v3.0",
            "ISC",
            "LaTeX Project Public License v1.3c",
            "Microsoft Public License",
            "MIT",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "PostgreSQL License",
            "SIL Open Font License 1.1",
            "University of Illinois/NCSA Open Source License",
            "The Unlicense",
            "zLib License",
            "None"   
        ],  
    },

    // Contribution section
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project?"   
    },

    // Tests section
    {
        type: "input",
        name: "tests",
        message: "Provide testing instructions for your project.",
        default: "npm tests" 
    },

    // Questions section
    // Github Username
    {
        type: "input",
        name: "github",
        message: "Enter your Github username. 💻"
    },

    // Email Address
    {
        type: "input",
        name: "email",
        message: "Enter your email address? 📧" 
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Loading File...`);
        writeToFile("README.md", generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
