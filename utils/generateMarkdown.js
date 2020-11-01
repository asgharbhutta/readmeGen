
const generateBadge = lic => {
  if (lic == 'Free') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
    `
  }else if (lic == 'Regular'){
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
    `
  }else if (lic == 'Premium'){
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  }else{
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
    `
  }
};

function generatePage(data) {
  return `# ${data.title}

  ${generateBadge(data.lic)}
  
  # Description
  ${data.description}

  # Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Tests](#Tests)
  - [Questions?](#Questions?)


  # Installation
  ${data.installations}

  # Usage
  ${data.usage}

  # Contributions
  ${data.contributes}

  # Tests
  ${data.tests}

  # Questions?
  - Please contact ${data.email} for questions

  - Github: https://github.com/${data.github}


  

`;
}

module.exports = generatePage, generateBadge;
