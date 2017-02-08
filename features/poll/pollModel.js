'use strict'

const mongoose = require('mongoose')

// Create a Schema and a Model


//This is the sub schema that is injected in the main schema (i.e. pollSchema) below
const PollOptionsSchema = new mongoose.Schema({
    option: {type: String, required: true},
    score: {type: Number, required: true}
});

const pollSchema = new mongoose.Schema({
  username: {type: String, required: true},  
  pollName: {type: String, required: true},
  pollOptions: [PollOptionsSchema] //required: true}  //this is importing the schema from above
});

// Ensure unique combo of username and pollName to prevent same user creating multiple polls of same name
pollSchema.index({username: 1, pollName: 1}, { unique: true });

const Poll = mongoose.model('poll', pollSchema);

module.exports = Poll