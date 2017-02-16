# API contracts

Get a Poll [ Get /api/poll/:id ]
=============

Gets an individual poll

Query params:
* id - the unique ID of the poll.

Payload: none.

The server returns a `200 OK` response with the poll json entity.

Example Request
---------------
GET /api/poll/589c2886ded7ad5addd0c87b HTTP/1.1
Content-Type: application/json

no payload...

Example Response
----------------
200 OK

{
  "username": "dddd",
  "pollName": "mypoll",
  "pollOptions": [{
      "option": "batman",
      "score": 0
    }, {
      "option": "he-man",
      "score": 0
    }]
}

Error Responses
---------------
* 500 Internal Server Error - Generic Error

------------------------------------------------------------------
Find all polls by user [ Get /user/:username/ ]
=============

Gets all polls by user

Query params:
* user - the unique username.

Payload: none.

The server returns a `200 OK` response with the json entity of all polls by user.

Example Request
---------------
GET /api/poll/tim HTTP/1.1
Content-Type: application/json

no payload...

Example Response
----------------
200 OK
{
  {
    "username": "dddd",
    "pollName": "mypoll",
    "pollOptions": [{
        "option": "batman",
        "score": 0
      }, {
        "option": "he-man",
        "score": 0
      }]
  },
  {
    "username": "tre",
    "pollName": "mypoll",
    "pollOptions": [{
        "option": "batman",
        "score": 0
      }, {
        "option": "he-man",
        "score": 0
      }]
  }
}

Error Responses
---------------
* 500 Internal Server Error - Generic Error

------------------------------------------------------------------
Create a new poll [ POST /api/poll/ ]
=============

Create a new poll

Query params: none

Payload:  JSON representation of the poll

The server returns a `200 OK` response with the json entity {success: true, message: 'success: added'}

Example Request
---------------
POST /api/poll/ HTTP/1.1
Content-Type: application/json

Payload:     {
                username: 'dave',
                pollName: "mypoll", 
                pollOptions: [{
                                "option": "batman",
                                "score": 0
                              }, {
                                "option": "he-man",
                                "score": 0
                              }]
              }

Example Response
----------------
200 OK

{ success: true, 
  message: 'success: added', 
  poll: {
          "_id": "58a1ba69af38fd34724f95db",
          "username": "tim",
          "pollName": "favourite hero",
          "pollOptions": [
            {
              "option": "batman",
              "score": 0,
              "_id": "58a1ba69af38fd34724f95dd"
            }
          ]
        }}

Error Responses
---------------
* 500 Internal Server Error - Generic Error

------------------------------------------------------------------
Edit a poll [ GET /api/poll/:id/edit ]
=============

Get data to edit a poll

Query params: Poll ID

Payload:  none

The server returns a `200 OK` response with the json entity of the pre-edited Poll

Example Request
---------------
POST /api/poll/:id/edit HTTP/1.1
Content-Type: application/json

Payload:  none

Example Response
----------------
200 OK

{
  "username": "dddd",
  "pollName": "mypoll",
  "pollOptions": [{
      "option": "batman",
      "score": 0
    }, {
      "option": "he-man",
      "score": 0
    }]
}

Error Responses
---------------
* 500 Internal Server Error - Generic Error

------------------------------------------------------------------
Show all polls by all users [ Get /api/poll/ ]
=============

Gets all polls by all users

Query params:
* none

Payload: none.

The server returns a `200 OK` response with the json entity of all polls by all users.

Example Request
---------------
GET /api/poll/ HTTP/1.1
Content-Type: application/json

no payload...

Example Response
----------------
200 OK
//assume just 2 users in database
[
  {
    "username": "dddd",
    "pollName": "mypoll",
    "pollOptions": [{
        "option": "batman",
        "score": 0
      }, {
        "option": "he-man",
        "score": 0
      }]
  },
  {
    "username": "tre",
    "pollName": "mypoll",
    "pollOptions": [{
        "option": "batman",
        "score": 0
      }, {
        "option": "he-man",
        "score": 0
      }]
  }
]

Error Responses
---------------
* 500 Internal Server Error - Generic Error

------------------------------------------------------------------
Update an existing poll [ PUT /api/poll/:id ]
=============

Update an existing poll

Query params: poll :id

Payload:  JSON representation of the poll

The server returns a `200 OK` response with the json entity {success: true, message: 'success: poll updated'}

Example Request
---------------
PUT /api/poll/589c2886ded7ad5addd0c87b HTTP/1.1
Content-Type: application/json

Payload:     {
                username: 'dave',
                pollName: "mypoll", 
                pollOptions: [{
                                "option": "batman",
                                "score": 0
                              }, {
                                "option": "he-man",
                                "score": 0
                              }]
              }

Example Response
----------------
200 OK

{success: true, message: 'success: poll updated'}

Error Responses
---------------
* 500 Internal Server Error - Generic Error


------------------------------------------------------------------
Delete an existing poll [ DELETE /api/poll/:id ]
=============

Delete an existing poll

Query params: poll :id

Payload:  none

The server returns a `200 OK` response with the json entity {success: true, message: 'success: poll deleted'}

Example Request
---------------
DELETE /api/poll/589c2886ded7ad5addd0c87b HTTP/1.1
Content-Type: application/json

Payload:     none

Example Response
----------------
200 OK

{success: true, message: 'success: poll deleted'}

Error Responses
---------------
* 500 Internal Server Error - Generic Error
