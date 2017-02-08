
const assert = require('assert');
require('../../test/setup')
const PollModel = require('./pollModel');
var poll;
// Describe our tests
describe('Saving records', function(){

  // Create tests
  it('Saves a record to the database', function(done){

     poll = new PollModel({
      username: 'tim', 
      pollName: 'favourite hero', 
      pollOptions: [{option: 'batman', score:0}, {option: 'he-man', score:0}]
    });

    poll.save().then(function(){
      assert(!poll.isNew);
      done();
    });

  });

});

describe('Finding records', function(){
  // Add a poll to the db before each tests
  beforeEach(function(done){
     poll = new PollModel({
      username: 'tim', 
      pollName: 'favourite hero', 
      pollOptions: [{option: 'batman', score:0}, {option: 'he-man', score:0}]
    });

    poll.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Finds a record from the database', function(done){
    PollModel.findOne({username: 'tim'}).then(function(result){
      assert(result.username === 'tim');
      done();
    });
  });

  it('Finds a record by unique id', function(done){
    PollModel.findOne({_id: poll._id}).then(function(result){
      assert(result._id.toString() === poll._id.toString());
      done();
    });
  });

});

// Describe our tests
describe('Deleting records', function(){
  // Add a poll to the db before each tests
  beforeEach(function(done){
     poll = new PollModel({
      username: 'tim', 
      pollName: 'favourite hero', 
      pollOptions: [{option: 'batman', score:0}, {option: 'he-man', score:0}]
    });
    poll.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Deletes a record from the database', function(done){
    PollModel.findOneAndRemove({username: 'tim'}).then(function(){
      PollModel.findOne({username: 'tim'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });

});

// Describe our tests
describe('Updating records', function(){
  beforeEach(function(done){
     poll = new PollModel({
      username: 'tim', 
      pollName: 'favourite hero', 
      pollOptions: [{option: 'batman', score:0}, {option: 'he-man', score:0}]
    });
    poll.save().then(function(){
      done();
    });
  });

  // Create tests
  it('Updates the name of a record', function(done){
      PollModel.findOneAndUpdate({username: 'tim'}, {username: 'parm'}).then(function(){
          PollModel.findOne({_id: poll._id}).then(function(result){
              assert(result.username === 'parm');
              done();
          });
      });
  });

 xit('Adds 1 to a poll option vote of specific record', function(done){
    PollModel.update({username: 'tim'}, { $inc: {"pollOptions[0].score": 1}}).then(function(){
        PollModel.findOne({username: 'tim'}).then(function(record){
            // console.log(record)
            assert(record.pollOptions[0].score === 1);
            done();
        });
    });
 });


});

// Describe our tests
describe('Nesting records', function(){

 beforeEach(function(done){
     poll = new PollModel({
      username: 'tim', 
      pollName: 'favourite hero', 
      pollOptions: [{option: 'batman', score:0}, {option: 'he-man', score:0}]
    });
    poll.save().then(function(){
      done();
    });
  });

    it('Adds a poll option for existing poll', function(done){

        poll.save().then(function(){
            PollModel.findOne({username: 'tim'}).then(function(record){
                // add an option to the poll options
                record.pollOptions.push({option: "spongebob", score: 0});
                record.save().then(function(){
                    PollModel.findOne({username: 'tim'}).then(function(record){
                        assert(record.pollOptions.length === 3);
                        done();
                    });
                });
            });
        });

    });

});