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
  return `
  # ${data.title}

${data.description}
${data.licenseBadge}


---
## Table of Contents
1. [About](#about)
2. [Installation](#installation)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
7. [Authors and Acknowledgment](#authors%20and%20acknowledgment)
---
## About
${data.about}

---
## Visuals:
![]()
---
## Installation:

${data.installation}
To clone the repo:

    git clone ${data.clone}

---
## License

License used for this project - ${data.license}
* For more information on license types, please reference this website
for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).
---
## Contributing:

To contribute to this application, create a pull request.
Here are the steps needed for doing that:
- Fork the repo
- Create a feature branch (git checkout -b YOUR-NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request
Following a code review, your feature will be merged.
---
## Questions:

${data.questions}
---
## Tests:

${data.test}
---
## Authors and Acknowledgments

${data.author}
---
## Contact Information:

* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}

`;
}

module.exports = generateMarkdown;