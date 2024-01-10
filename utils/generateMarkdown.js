function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case "APACHE 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case "GPL 3.0":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

    case "BSD 3":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

    case "None":
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `<a href="https://opensource.org/licenses/MIT">MIT</a>`;

    case "APACHE 2.0":
      return `<a href="https://opensource.org/licenses/Apache-2.0">APACHE 2.0</a>`;

    case "GPL 3.0":
      return `<a href="https://www.gnu.org/licenses/gpl-3.0">GPL 3.0</a>`;

    case "BSD 3":
      return `<a href="https://opensource.org/licenses/BSD-3-Clause">BSD 3</a>`;

    case "None":
      return "";
  }
}

function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  if (license === "None") {
    return `## License

N/A`;
  } else {
    return `## License

This application is covered under the ${link} license.`;
  }
}

function generateMarkdown(
  title,
  badge,
  description,
  installation,
  usage,
  license,
  contribution,
  test,
  email,
  github
) {
  return `# ${title}
${badge}
  
## Description
  
${description}
  
## Table of Contents
  
[Installation](#installation)
  
[Usage](#usage)
  
[License](#license)
 
[Contributing](#contributing)
 
[Tests](#tests)
 
[Questions](#questions)
 
## Installation

${installation}

## Usage

${usage}

${license}


## Contributing

${contribution}

## Tests

${test}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}).
`;
}

module.exports = {
  generateMarkdown: generateMarkdown,
  renderLicenseBadge: renderLicenseBadge,
  renderLicenseLink: renderLicenseLink,
  renderLicenseSection: renderLicenseSection,
};
