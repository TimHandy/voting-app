'use strict'

const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema({
  username: String,
  pollName: String,
  pollOptions: Array
});

const Polls = mongoose.model('polls', pollSchema);

module.exports = Polls
