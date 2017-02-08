'use strict'
require('dotenv').config();
const express = require('express');
const router = express.Router();
const pollController = require('./pollController')



// Note to self: silence errors on production (Heroku) from dotenv complaining about lack of .env file: On Heroku the environment vars are added manually on the Settings page.


/* Mongoose and mLab setup ---------------------------------------------------*/

/* ----------------------------------------------------------------------------
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 =============================================================================*/

const options = {
    server: {
        socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
    }, 
    replset: {
        socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 }
    }
}

const mongoose = require('mongoose')
mongoose.Promise = global.Promise


mongoose.connect('mongodb://localhost/votingapp');

mongoose.connection.once('open', function() {
  console.log('Connection made!');
}).on('error', function(error) {
  console.log('Connection error:', error);
})

const PollModel = require('./pollModel')


// /*  End of Mongoose set up ----------------------------------------- */


function addPollToDatabase(poll) {
    
    const newModelInstance = new PollModel({
            username: poll.username,
            pollName: poll.pollName,
            pollOptions: poll.pollOptions
        })
    
    // save instance to the database
    newModelInstance.save(function(err, data) {
        if (err) {
          console.log(err.errmsg);
        } else {
            console.log('Poll added to database successfully!')
        }
    })
}

function createTestData() {
    addPollToDatabase({username: 'tim', pollName: 'favourite hero', pollOptions: [{'batman':0, 'he-man': 0}]}, function() {
      
    })
    addPollToDatabase({username: 'tim', pollName: 'favourite hero', pollOptions: [{'She-Ra':0, 'super-woman': 0}]})
    addPollToDatabase({username: 'parm', pollName: 'favourite hero', pollOptions: [{'She-Ra':0, 'super-woman': 0}]})
    addPollToDatabase({username: 'parm', pollName: 'favourite people', pollOptions: [{'She-Ra':0, 'super-woman': 0}]})
}

router.get('/', pollController.allPolls) // return all polls 
router.post('/new', pollController.newPoll)  // create new poll

router.get('/:id/edit', pollController.editPoll)  // show edit screen for poll
//router.put('/:id', pollController.updatePoll)  // update poll

router.get('/:id', pollController.getPoll) // show poll

router.get('/:user/', pollController.findPollsByUser)  // show all polls for user

//router.delete()

module.exports = router;