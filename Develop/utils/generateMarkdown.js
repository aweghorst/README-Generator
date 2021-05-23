// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Licensing:

  ## Description:

  ${data.description}

  ## Table of Contents:
  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

  ## Installation:
  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage:

  ${data.usage}

  ## License:

  This product is licensed under the ${data.license} license.

  ## Contributing:

  ${data.contribution}

  ## Tests:

  To run tests, enter the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions:

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.  You can find more of my work on my github: [${data.userName}](http://www.github.com/${data.userName})
  `;
}

module.exports = generateMarkdown;
