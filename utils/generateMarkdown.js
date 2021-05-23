// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "APACHE 2.0":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GPL 3.0":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "BSD 3":
      return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "APACHE 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "None":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  if (licenseBadge === "") {
    return "";
  } else {
    return `[![license](${licenseBadge})](${licenseLink})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseElement = renderLicenseSection(data.license);
  return `# ${data.title}
  ${licenseElement}

  ## Description:

  ${data.description}

  ## Table of Contents:

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  
  To install the necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage:

  ${data.usage}

  ## License:

  This product has the following Licenses: ${data.license}.

  ## Contributing:

  ${data.contributing}

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
