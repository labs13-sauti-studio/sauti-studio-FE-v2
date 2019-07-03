# Sauti Design Studio

You can find the deployed project at [Sauti Design Studio](https://sautistudio.netlify.com/).

## Contributors

|                                       [Juru Mugenzi](https://github.com/jurusteve)                                        |                                       [Tristan Grovender](https://github.com/tristangrovender)                                        |                                       [Garrett Weems](https://github.com/glweems)                                        |                                       [Tohm Lev](https://github.com/tohmlev)                                        |                                       [Alan Perez](https://github.com/alanperez)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://avatars1.githubusercontent.com/u/19935372?s=460&v=4" width = "200" />](https://github.com/)                       |                      [<img src="https://avatars0.githubusercontent.com/u/46428421?s=460&v=4" width = "200" />](https://github.com/)                       |                      [<img src="https://avatars1.githubusercontent.com/u/32476858?s=460&v=4" width = "200" />](https://github.com/)                       |                      [<img src="https://avatars1.githubusercontent.com/u/49999093?s=460&v=4" width = "200" />](https://github.com/)                       |                      [<img src="https://avatars2.githubusercontent.com/u/25354218?s=400&v=4" width = "200" />](https://github.com/)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jurusteve)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tristangrovender)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/glweems)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tohmlev)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/alanperez)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jurustevemugenzi/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tristan-grovender-440a54173/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/garrett-weems-ab2106164) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tohm-lev-18666a67/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/alan-perez-25a198185/) |

<br>
<br>


## Project Overview

[Trello Board](https://trello.com/b/Kt9QUwpw/labs13-sauti-studio)

[Product Canvas](https://projects.invisionapp.com/share/YAS77O8SMTK#/screens)

Sauti Studio + Design is a desktop product that aims to serve the East African communities by providing a simple tool that will allow individuals with no programming skills to build and customise a text based app to share information and knowledge. Sauti Studio + Design encourages anyone who experience the problems stemming from lack of information to take a stand and design their own solutions by laying out a USSD text-flow that can be accessed via simple phone.

Essentially, Sauti Studio + Design is a digital tool that will provide a  UI for building APIs designed to handle SMS/USSD requests.  User's should be able to build a simplified "flow" which saves as a series of nodes and connections.  This will also require thinking about the resulting API, which when sent a text query (with Session ID), returns the appropriate response. This REST API can then be integrated into Sauti’s country specific USSD aggregator.

## Tech Stack

### Front end built using:

#### React/Gatsbyjs

Why did you choose this framework?

- Server-side rendering
- Quick loading times
- Industry standard
- SEO

#### Front end deployed to `Netlify`

#### [Back end](https://github.com/labs13-sauti-studio/labs13-sauti-studio-BE) built using:

#### Express JS

- Express has a large community of users.
- Express is the most matured framework for Node.js with 5+ years of use.
- Express offers a quick and simple way to get a server up and running.

# APIs

### Africa's Talking
- Africa's talking was a no-brainer since our stakeholder's company is already using it in production.
- Africa's talking also works with the  ussd-menu-builder library which we are used to reduce workload.
- Africa's talking services East Africa, which is our target audience.

## Oauth

### Passport.js

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  GATSBY_API_URL=
    
# Installation Instructions

`yarn install`
or
`npm install`

## Other Scripts

    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write src/**/*.{js,jsx}",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "lint": "eslint .",
    "lint:fix": "eslint --ignore-path .gitignore . --fix",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\""

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.
Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/labs13-sauti-studio/labs13-sauti-studio-BE/blob/master/README.md) for details on the backend of our project.
```

```
