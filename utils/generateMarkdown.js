// function to render license badge
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// function to render license link
const renderLicenseLink = (license) => {
  if(license !== "None") {
    return `* [License](#license)`
  }
  return ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ### Description 

  ${data.description}

  ### Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Contact-Information](#Contact-Information)
  
  ### Installation
  Run the following command to install required dependencies

  \`\`\`
  ${data.installation}
  \`\`\`

  ### Usage

  Use Node version 16 and above
  ${data.usage}

  ### License

  This project is licensed under the ${data.license} license.

  ### Contributing

  ${data.contributing}

  ### Tests
  Run the following command to run tests:
  
  \`\`\`
  ${data.tests}
  \`\`\`

  ### Contact Information

  * Github: [${data.github}](https://github.com/${data.github}).
  * Email: ${data.email}

`;
}



module.exports = generateMarkdown;
