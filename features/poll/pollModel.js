'use strict'

const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema({
  username: {type: String, required: true},  
  pollName: {type: String, required: true},
  pollOptions: {type: Array, required: true},
});

// Ensure unique combo of username and pollName to prevent same user creating multiple polls of same name
pollSchema.index({ username: 1, pollName: 1}, { unique: true });

const Polls = mongoose.model('polls', pollSchema);

module.exports = Polls
