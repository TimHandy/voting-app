'use strict'

const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema({
  username: {type: String, required: true},  
  pollName: {type: String, required: true, index: {unique: true} },
  pollOptions: {type: Array, required: true},
});

const Polls = mongoose.model('polls', pollSchema);

module.exports = Polls
