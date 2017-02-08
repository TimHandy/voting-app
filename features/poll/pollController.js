'use strict'
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const PollModel = require('./pollModel')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId

module.exports.getPoll = function(req, res, next) {

 // createTestData()//router.get('/:username/:pollname', doroutefile)

    const username = req.params.username
    const pollName = req.params.pollname
    
    PollModel.findOne({'pollName': pollName}, function(err, docs){
      if(err || docs == null) {
        var invalidPollName = new Error('findOne: That poll name does not exist in the database');
        return next(invalidPollName);
      }
      res.send(JSON.stringify(docs));
    })
}


module.exports.findPollsByUser = function(req, res, next) {

    const username = req.params.username
    
    PollModel.find({'username': username}, function(err, doc){
      if(err || doc == null) {
        var invalidUsername = new Error('findPollsByUser: That username does not exist in the database');
        return next(invalidUsername);
      }
      res.send(JSON.stringify(doc));
    })
}

module.exports.newPoll = function(req, res, next) {

  console.log('body:', req.body)
  console.log('username:', req.body.username),
  console.log('pollOptions:', req.body.pollOptions)
 
  const successMessage = {
    message: 'congratulations! Your poll has been posted to http://votingapp.heroku.com/Quincy/who is your fav captain'
  }
  
  const poll = new PollModel(
    {
      username: req.body.username,
      pollName: req.body.pollName, 
      pollOptions: req.body.pollOptions
    }
  ).save(function(err, data) {
    if (err) {
      console.log('Error saving to db')
      res.json({success: false, message: "failed to save"})
    } else {
      console.log('success: added')
      res.json({success: true, message: "yay, save sucess"})
    }
  })
}


module.exports.editPoll = function(req, res, next) {
    console.log('in the editPoll route')
    const id = req.params.id
        
    PollModel.findOne( { "_id": ObjectId(id) }, function(err, doc){
      if (err) {
        var invalidPollName = new Error('editPoll: That poll does not exist in the database');
        return next(invalidPollName);
      }
      res.json(doc);
    })
}

module.exports.allPolls = function(req, res, next) {
    
    PollModel.find({}, function(err, docs){
      if(err || docs == null) {
        var error = new Error('allPolls: Unable to locate polls');
        return next(error);
      }
      res.json(docs);
    })
}