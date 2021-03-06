## NOTES:

1. Plan React front end

  - Start with a mockup
  - Break into a hierarchy of components

  - Create polls
    - add items
  - View my polls
    - view aggregate results of my polls (Chart.js or Google Charts.)
  - Delete my polls
  - Vote on other polls
  - Create new options on an existing poll

  # Step 1: Break The UI Into A Component Hierarchy

  * App
    * Nav - selectively render button depending on login status
    * Jumbotron - only when not logged in
    * Dashboard
    * UserSettings - maybe the same as registerUser
    * Register
    * NewPoll (EditPoll is the same)
    * EditPoll
    * ViewPolls - selectively displays allpolls or mypolls
    * DisplayPoll - displaying a single poll
      * Chart
    * Footer

    # Step 2: Build A Static Version in React


1. Plan Express

  Refer to 'API Contracts.md' for API usage guide.

  | **URL** | **HTTP Verb** |  **Action**|
  |------------|-------------|------------|
  | /poll/         | GET       | index
  | /poll/user/    | GET       | index
  | /poll/new      | GET       | new
  | /poll          | POST      | create
  | /poll/:id      | GET       | show
  | /poll/:id/edit | GET       | edit
  | /poll/:id      | PATCH/PUT | update
  | /poll/:id      | DELETE    | destroy


  | **URL** | **HTTP Verb** |  **Action**|
  |------------|-------------|------------|
  | /user/         | GET       | index
  | /user/new      | GET       | new
  | /user          | POST      | create
  | /user/:id      | GET       | show
  | /user/:id/edit | GET       | edit
  | /user/:id      | PATCH/PUT | updat
  | /user/:id      | DELETE    | destroy

  - Express generator
  - What CRUD methods do we need?
  - GET
    - get a single entry     GET: /:username/:pollname   using ID here?
      - on error?
    - get multiple entries   GET: /:username
      - on error?
  - POST
    - new poll      POST: /new-poll  send the payload in the request?
      - on error?
    - response: json: congratulations! Your poll has been posted to http://votingapp.heroku.com/Quincy/who is your fav captain
  - PUT
    - single updated item   PUT /update-poll/:id
    - on error?
  - DELETE
    - single item delete    DELETE /delete-poll/:id
    - on error?

  featureDir
    featureNameController.js
    featureNameModel.js
    featureNameRoutes.js


    Discuss API contracts

1. Build Express REST API

  - CRUD
  - Database to store polls
    - Polls are stored for each user
    - Schema
    votingDb [
      {
      ID:
      username: string
      email: string
      password?: plugin here?
      polls: [
        {
        id:
        username:
        pollName: string
        pollOptions: [{'batman': 5}, {'He-Man': 0}]
        }
      ]
      }
    ]

    polls: [
        {
        id:
        username:
        pollName: string
        pollOptions: [{option: string: score: number}, {'He-Man': 0}]
        }
      ]
  - Mongoose
  - Test with Advanced REST Client / Postman

    1. Authentication - add after it's working for a single user?

      passport.js? for node.

1. Build React

  - Build a static version without state
  - Make a list of the minimal bits of info to be stored as state. Decide whether each should be state or props.
  - Identify which components should own the state, find a common parent for the state to live on. Get the downwards flow of state working
  - Add inverse flow of data from child components to the parents working




