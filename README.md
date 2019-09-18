# Sauti Design Studio

You can find the deployed project at [Sauti Design Studio](https://sautistudio.netlify.com/).

## Contributors

|[Kevin Tena](https://github.com/kevten22)|[Austin Howes](https://github.com/austie702)|[Amber Meador](https://github.com/nek0senpa1)|[Leianne Louis](https://github.com/leianne)|[Sean Kennedy](https://github.com/skennedy93)| [Thomas Claydon](https://github.com/gittc100)| 
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|[<img src="https://avatars0.githubusercontent.com/u/36459496?s=400&v=4" width = "200" />](https://github.com/kevten22)|[<img src="https://media.licdn.com/dms/image/C4E03AQEFOwyBzZSi_A/profile-displayphoto-shrink_800_800/0?e=1572480000&v=beta&t=dj9oTr66FidYvkw8MxewVTGOIHVmCAZCGALsE9HzoeM" width = "200" />](https://github.com/austie702) | [<img src="https://avatars2.githubusercontent.com/u/44776869?s=400&v=4" width = "200" />](https://github.com/nek0senpa1)| [<img src="https://avatars0.githubusercontent.com/u/26041727?s=400&v=4" width = "200" />](https://github.com/leianne)|[<img src="https://avatars0.githubusercontent.com/u/38869679?s=400&v=4" width = "200" />](https://github.com/skennedy93)| [<img src="https://avatars3.githubusercontent.com/u/37307521?s=400&u=81331a855611530734a0268c3fda7893e2aa12cd&v=4" width = "200" />](https://github.com/gittc100)|
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kevten22)|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/austie702)|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/nek0senpa1) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/leianne)| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/skennedy93)| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/gittc100)|
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kevintena22/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/austinhowes/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/amber-meador-62075213a/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/leiannelouis/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sean-kennedy-8a9383136/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/thomas-claydon/) |

<br>
<br>


## Project Overview

[Trello Board](https://trello.com/b/4HBS1AfL/sauti-design)

[Product Canvas](https://www.notion.so/Sauti-Design-Studio-f83f84ecef3c4e51b07a1a941580c306)

Sauti Studio + Design is a desktop product that aims to serve the East African communities by providing a simple tool that will allow individuals with no programming skills to build and customise a text based app to share information and knowledge. Sauti Studio + Design encourages anyone who experience the problems stemming from lack of information to take a stand and design their own solutions by laying out a USSD text-flow that can be accessed via simple phone.

Essentially, Sauti Studio + Design is a digital tool that will provide a  UI for building APIs designed to handle SMS/USSD requests.  User's should be able to build a simplified "flow" which saves as a series of nodes and connections.  This will also require thinking about the resulting API, which when sent a text query (with Session ID), returns the appropriate response. This REST API can then be integrated into Sauti’s country specific USSD aggregator.

## Tech Stack

### Front end built using:

#### React/Redux

#### Front end deployed to `Netlify`

#### [Back end](https://github.com/labs13-sauti-studio/sauti-studio-BE) built using:

#### Express/Node.js

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

## Diagramming

### [projectstorm react-diagrams](https://github.com/projectstorm/react-diagrams)

Recently Developed by Dylan Voster, he is accessible via this [Gitter Page](https://gitter.im/projectstorm/react-diagrams). 

A flow & process orientated diagramming library inspired by Blender, Labview and Unreal engine.

- Modern Codebase written entirely in Typescript and React, the library makes use of powerful generics, advanced software engineering principles and is broken up into multiple modules.
- Hackable and extensible the entire library including its core can be extended, rewired and re-assembled into fundamentally different software to suit your own software needs.
- HTML nodes as a first class citizen the library was originally written to represent advanced dynamic nodes, that are difficult to represent as SVG's due to complex input requirements ux requirements.
- Designed for process the library is aimed for software engineers that want to rewire their programs at runtime, and that want to make their software more dynamic.
- Fast diagram editing the defaults provided give the heighest priority to editing diagrams as fast as possible.

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_BE_API_URL='http://localhost:5000' OR Production Route 
    
# Installation Instructions

`yarn install` - to install dependencies

`yarn start` - to start local application

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

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

See [Backend Documentation](https://github.com/labs13-sauti-studio/sauti-studio-BE/blob/master/README.md) for details on the backend of our project.
```

```
