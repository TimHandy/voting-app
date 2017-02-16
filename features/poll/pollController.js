'use strict'
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const PollModel = require('./pollModel')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId

const handleError = function(res, errorMsg) {
    // console.log(errorMsg)
    res.status(500).json({success: false, message: errorMsg})
}

module.exports.getPoll = function(req, res, next) {

    const id = req.params.id
    
    PollModel.findOne({ "_id": ObjectId(id) }, function(err, docs){
      (err || (docs == null))
        ? handleError(res, 'Error can not find poll in db') 
        : res.status(200).json(docs)
    })
}

module.exports.findPollsByUser = function(req, res, next) {

    const username = req.params.username
    
    PollModel.find({'username': username}, function(err, docs){
      (err || (docs == null))
        ? handleError(res, 'Error can not find polls by user in db') 
        : res.status(200).json(docs)
    })
}

module.exports.newPoll = function(req, res, next) {
  console.log('this is req', req.body)
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
      (err) 
        ? handleError(err, res, 'Error saving to db') 
        : res.status(200).json({success: true, message: 'success: added', poll: data})
    })
}

module.exports.editPoll = function(req, res, next) {

    const id = req.params.id
        
    PollModel.findOne( { "_id": ObjectId(id) }, function(err, doc){
      (err || (doc == null))
        ? handleError(res, 'Error: that poll does not exist in database') 
        : res.status(200).json(doc)
    })
}

module.exports.allPolls = function(req, res, next) {
    
    PollModel.find({}, function(err, docs){
      (err || (docs == null))
        ? handleError(res, 'Error: unable to locate polls') 
        : res.json(docs)
    })
}

module.exports.deletePoll = function(req, res, next) {
    const id = req.params.id

    PollModel.findOneAndRemove({ "_id": ObjectId(id) }, function(err, doc){
      (err || (doc == null))
        ? handleError(res, 'Error: unable to delete poll') 
        : res.status(200).json({success: true, message: 'success: poll deleted'})
    })
}

module.exports.updatePoll = function(req, res, next) {

    const id = req.params.id

    const updatedPoll = 
    {
      username: req.body.username,
      pollName: req.body.pollName, 
      pollOptions: req.body.pollOptions
    }

        
    PollModel.findOneAndUpdate( { "_id": ObjectId(id) },  updatedPoll, {new: true}, function(err, doc){
      (err || (doc == null))
        ? handleError(res, 'Error: unable to update') 
        : res.status(200).json({success: true, message: 'success: poll updated', poll: doc})
    })
}