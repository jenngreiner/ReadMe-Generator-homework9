// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPL v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 2-Clause Simplified License":
      return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case "BSD 3-Clause New or Revised License":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0 - 1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public License 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU AGPL v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU GPL v2.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU LGPL v3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The Unilicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    default:
      "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  var licenseLink = renderLicenseLink(data.license);
  var licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
* [Usage](#Usage)
* [Tests](#Tests)
* [Installation](#installation)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Tests
  ${data.tests}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## License
  ${licenseLink}
  ${licenseSection}

  ## Questions
  Please contact <jenn.greiner1@gmail.com> with any questions. 
`;
}

module.exports = generateMarkdown;
