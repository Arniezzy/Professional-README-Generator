// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseBadge = " "
  if(license === "MIT"){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) "
  } else if(license === "APACHE 2.0") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) "
  } else if(license === "GPL 3.0"){
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) "
  } else if (license === "BSD 3"){
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) "
  } else {
    licenseBadge = ""
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = " "
  if(license === "MIT"){
    licenseLink = "https://opensource.org/licenses/MIT"
  } else if(license === "APACHE 2.0") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0"
  } else if(license === "GPL 3.0"){
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "BSD 3"){
    licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
  } else {
    licenseLink = " "
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === true){
    return "License Badge"
  } else {
    return " "
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## License
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
\`\`\`
To install necessary dependencies, run the following command: ${data.dependencies}
\`\`\`

## Usage
${data.using}

## License
\`\`\`
This project is licensed under the ${data.license} license.
\`\`\`

## Contributing
${data.contributing}

## Tests
\`\`\`
To run a test use: ${data.test}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}.
You can find more of my work at (https://github.com/${data.username}/).

`;
}

module.exports = generateMarkdown;
