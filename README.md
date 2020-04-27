# ☞ About

Supplies Tracker is a collaborative mobile platform to find out if supermarkets have run out of supplies and discover alternatives nearby.  
Hopefully it can ease the supermarket chaos and help people stay safe during the COVID-19 crisis.

It is still a work in progress, so any contribution is very much appreciated ♥︎

# Contents list

- [App demo](#App-demo)
- [Technologies used](#technologies-used)
- [Goals](#goals)
- [Features](#features)
- [Server repository](#☞-server-repository)

# App demo

To check out the currently deployed version, [click here.](https://wherecanibuy.netlify.com/)

![demo-gif](https://github.com/nikolasalim/supplies-tracker-client/blob/master/public/media/demo.gif)

# Technologies used

Click links to see samples in this project:

- [React](https://github.com/nikolasalim/supplies-tracker-client/blob/master/src/App.js)
- [Redux](https://github.com/nikolasalim/supplies-tracker-client/tree/master/src/actions)
- [Express](https://github.com/nikolasalim/supplies-tracker-server/blob/master/index.js)
  - [REST API](https://github.com/nikolasalim/supplies-tracker-server/blob/master/market/router.js)
- [Sequelize (n:n)](https://github.com/nikolasalim/supplies-tracker-server/blob/master/market/model.js)
- [Geolocation](https://github.com/nikolasalim/supplies-tracker-client/blob/master/src/extra/getCurrentPosition.js)
- [Material-UI](https://github.com/nikolasalim/supplies-tracker-client/blob/master/src/components/MarketsList.js)
- [Google Cloud Platform](https://github.com/nikolasalim/supplies-tracker-client/blob/master/src/components/Map.js)

# Goals

This project was built on a 2-week Codaisseur individual hackathon to help during the COVID-19 crisis.  
My personal goal was to built a mobile-first full-stack application and experiment with technologies not covered during the Codaisseur bootcamp.  
Breaking it down to more specific goals:

- Practice full-stack development using what I've learned during the bootcamp;
- Create a more organized and user-centered workflow – from wireframes to user stories and folders/components structuring;
- Build a more complex relationship between my tables to retrieve richer results on the backend;
- Experiment with geolocation and React map-enabling libraries;
- Explore different styling libraries;
- Practice Git and Github using branches and its best practices;

# Features

- View a list of nearby supermarkets;
- Search for supermarkets;
- Add new supermarkets;
- Mark products as out-of-stock for a specific supermarket;
- Update products' out-of-stock status;
- On the map: see supermarkets around you;
- On the map: check out-of-stock products for each supermarket;

# ☞ Server repository

The server side of this project is an Express server connected to a Sequelize database. [Click here for more details.](https://github.com/nikolasalim/supplies-tracker-server)
