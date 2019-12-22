[![Netlify Status](https://api.netlify.com/api/v1/badges/8d10ad13-edb4-4cbe-a60c-5df4de3f23bd/deploy-status)](https://app.netlify.com/sites/johnbrennan-lumdb/deploys)

# Getting Started
Level Up Movie Database is a tutorial where you learn some pretty basic react stuff. If you're interested in learning React, I highly recommend it!

This project utilizes themoviedb.org's public API. In order to get this running locally in your environment, you'll need to create an API key. After creating the key, create a .env file at the root of the `lumdb` directory, and add the new API key to that file using the following syntax: REACT_APP_API_KEY=***********. After that you should be good to go!

# Your local environment
This project utilizes node package manager or npm to start a local node server and get the project running on localhost:3000.

Download the latest version of node from https://nodejs.org/en/ (skip this step if you already use npm)
Navigate to where you'd like the project to be run on your computer /Docments
Clone the repo git clone https://github.com/jbrennan414/lumdb.git
Change directories into our new directory cd lumdb
Within this repo is a file called package.json, where npm will find all the packages it needs to run the site
Run npm install or npm i to start install all the dependanceies
Finally run npm run start to start the movie database!!