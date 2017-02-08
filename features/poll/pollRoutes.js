'use strict'
require('dotenv').config();
const express = require('express');
const router = express.Router();
const controller = './pollController';

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

/* // GET /api/imagesearch/:searchTerm?offset=x */
router.get('/:username/:pollname', function(req, res, next) {

 // createTestData()

    const username = req.params.username
    const pollName = req.params.pollname
    
    PollModel.findOne({'pollName': pollName}, function(err, docs){
      if(err || docs == null) {
        var invalidPollName = new Error('That poll name does not exist in the database');
        return next(invalidPollName);
      }
      res.send(JSON.stringify(docs));
    })
});

router.get('/:username/', function(req, res, next) {

    const username = req.params.username
    
    PollModel.find({'username': username}, function(err, doc){
      if(err || doc == null) {
        var invalidUsername = new Error('That username does not exist in the database');
        return next(invalidUsername);
      }
      res.send(JSON.stringify(doc));
    })
});


// /* GET latest searches. */
// router.get('/latest/imagesearch/', function(req, res, next) {
//     console.log('latest searches route');
    
//     searchModel.find({}).sort('-when').limit(10).exec(function(err, data) {
//         const formattedResults = []
//         console.log('data: ', data);
//         data.forEach(function(searchItem) {
//             let item = {
//                 "term": searchItem.term,
//                 "when": searchItem.when
//             }
//             formattedResults.push(item)
//         })
//         res.send( formattedResults )
//     })
// });

// /*
// response should be in following format, returning just latest 10 search entries:
// [
//     {
//         "term": "lolcats funny",
//         "when": "2016-12-06T11:44:33.235Z"
//     }
// ]
// */

module.exports = router;