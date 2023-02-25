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
            "Apache&license&2.0",
            "BoostSoftwareLicense1.0",
            "CreativeCommonsAttribution4.0",
            "EuropeanUnionPublicLicense1.1",
            "GNUGeneralPublicLicense&v3.0",
            "ISC",
            "LaTeX%ProjectPublicLicensev1.3c",
            "MicrosoftPublicLicense",
            "MIT",
            "MozillaPublicLicense2.0",
            "OpenSoftwareLicense 3.0",
            "PostgreSQL%License",
            "SIL%OpenFontLicense1.1",
            "University%of%Illinois/NCSA%Open%Source License",
            "TheUnlicense",
            "zLibLicense",
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
        writeToFile("./generator/README.md", generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
