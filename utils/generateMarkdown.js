// function to render license badge
function renderLicenseBadge (license) {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
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
