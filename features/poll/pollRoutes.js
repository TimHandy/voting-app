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

const pollModel = require('./pollModel')


// /*  End of Mongoose set up ----------------------------------------- */


function addPollToDatabase(poll) {
    
    const newModelInstance = new pollModel({
            username: poll.username,
            pollName: poll.pollName,
            pollOptions: poll.pollOptions
        })
    
    // save instance to the database
    newModelInstance.save(function(err, data) {
        if (err) {
            throw err
        } else {
            console.log('Poll added to database successfully!')
        }
    })
}

/* // GET /api/imagesearch/:searchTerm?offset=x */
router.get('/:username/:pollname', function(req, res, next) {
    // addPollToDatabase({username: 'tim', pollName: 'favourite hero', pollOptions: [{'batman':0, 'he-man': 0}]})

    const username = req.params.username
    const pollName = req.params.pollname
    
    pollModel.findOne({'pollName': pollName}, function(err, doc){
      if(err || doc == null) {
        var invalidPollName = new Error('That poll name does not exist in the database');
        return next(invalidPollName);
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