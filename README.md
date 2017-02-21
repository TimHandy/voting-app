# Voting App

**Objective:** Build a full stack JavaScript app that is functionally similar to this: https://fcc-voting-arthow4n.herokuapp.com/ and deploy it to Heroku.

Note that for each project, you should create a new GitHub repository and a new Heroku project. If you can't remember how to do this, revisit https://freecodecamp.com/challenges/get-set-for-our-dynamic-web-application-projects.


**User Story:** As an authenticated user, I can keep my polls and come back later to access them.

**User Story:** As an authenticated user, I can share my polls with my friends.

**User Story:** As an authenticated user, I can see the aggregate results of my polls.

**User Story:** As an authenticated user, I can delete polls that I decide I don't want anymore.

**User Story:** As an authenticated user, I can create a poll with any number of possible items.

**User Story:** As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story:** As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)

**User Story:** As an authenticated user, if I don't like the options on a poll, I can create a new option.

## Completed App

[Github Pages app](https://)

## Notable learning/features

- Created the Express REST API backend first, using the Express generator as boilerplate.
- Kept routes short and readable by importing the functions from pollController 
- Wrote API documentation: 'API Contracts.md'
- Added a cors middleware section in app.js for Express to allow the front end port 8080 to talk to back end port 3000; think this will need to be removed for production?
- Used React-Bootrap for react style components. This can be mixed with normal Bootstrap
- Used Recharts to make D3 setup easier.
- Not implemented multiple users and authentication. For authentication look at Passport.js or maybe OAuth for a simpler way?

## Notes for next time

- Important!!: see the devServer section of webpack config for how to proxy requests to the backend, this makes port 8080 forward to port 3000
- Dashboard has state, this should be moved to the Container dir.
- Started off doing some tests in the pollController_test dir, but was taking forever to write them.
- Not sure whether the mongoose connection should be in the routes file?
- addPollToDatabase should not be in pollRoutes, it should go in the controller?
- createTestData should go in a utils dir.
- Chart was a bit slap dash, need to do some more D3 to understand this.
- Lots of selective rendering (Dashboard.jsx, turning on and off compenents... wonder if this should have been done with React Router to show different components as 'pages' instead? It felt dirty doing this way.
- Webpack is v1, attempted to use v2 but failed.
- Webpack config for React-Bootstrap needs a whole load of loaders: .png, .jpg, woff, ttf, eot, svg....
- Webpack - don't think hotmodulereplacementplugin was actually working... only half tried to get it to work.


## Dev

See package.json for run commands.

  1. run mongod in a terminal to get the database listening
  1. start backend with `npm start`
  1. start front end with `npm run dev`