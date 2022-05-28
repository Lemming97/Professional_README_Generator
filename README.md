# Professional_README_Generator


## Title

README Generator

## User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Acceptance Criteria](#Acceptance)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#Screenshots)

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN a user is prompted for information about their application repository
THEN a high-quality, professional README.md is generated with the title of their project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

WHEN a user enter their project title
THEN this is displayed as the title of the README.

WHEN a user enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

WHEN a user chooses a license for their application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

WHEN a user enters their GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile.

WHEN a user enters their email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

WHEN a user clicks on the links in the Table of Contents
THEN a user is taken to the corresponding section of the README.
```



## Installation

Install node.js, then install inquirer

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Screenshots
