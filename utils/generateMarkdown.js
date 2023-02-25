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
    return `\n* [License](#license)\n`
  }
  return ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}








`;
}



module.exports = generateMarkdown;
