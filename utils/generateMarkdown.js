// function to render license badge
function renderLicensebadge (license) {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicensebadge(data.license)}
`;
}

module.exports = generateMarkdown;
