# Photomate

A fully featured photo sharing web app, based on a popular social media platform. Built with the [MERN](https://medium.com/@digimktg/what-is-mern-stack-9c867dbad302).

The backend is available [here](https://github.com/andyrutherford/photomate-backend)

<img src="./img/screenshots/1.png" width="600">
<img src="./img/screenshots/2.png" width="600">
<img src="./img/screenshots/3.png" width="600">
<img src="./img/screenshots/4.png" width="600">
<img src="./img/screenshots/5.png" width="250">

## Features

- User authentication using JSON web tokens or OAuth through Github.
- Reset password email if you lose access to your account.
- Create a new post with a photo and caption.
- Like, and comment other users posts.
- Save posts from other users.
- View other user profiles, and their pictures in a photo grid.
- Display a blue "Verified Badge" if you verify your identity.

## Setup

To run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```sh
# Clone this repository
$ git clone

$ cd

$ npm install

# For OAuth with Github, create a .env in the root folder with the following:
$ REACT_APP_GITHUB_CLIENT_ID=<your-github-client-id>
```

## Tech

Photomate uses a number of open source projects to work properly:

- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [node.js](http://nodejs.org) - evented I/O for the backend
- [Express](http://expressjs.com) - fast node.js network app framework
- [mongoDB](https://www.mongodb.com/) - general purpose, document-based, distributed database
- [Cloudinary](https://cloudinary.com/) - for image storage
- [Redux](https://react-redux.js.org/) - for state management
- [mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
- [JSON Web Token](https://jwt.io/) - for user authentication
- [NodeMailer](https://nodemailer.com/) - module for Node.js to send emails
- [styled components](https://styled-components.com/) - for styled components
- [React-Toastify](https://github.com/fkhadra/react-toastify) - for alerts
- [Emoji Mart](https://github.com/missive/emoji-mart) - for emojis

## Demo

## License

MIT
