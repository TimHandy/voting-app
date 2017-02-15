'use strict'

import React from 'react'
import {Button, Grid, Col, Row} from 'react-bootstrap'
import ViewPolls from './ViewPolls'
import Register from './Register'
import UserSettings from './UserSettings'
import PollCreator from './PollCreator'
import EditPoll from './EditPoll'
import DisplayPoll from './DisplayPoll'




class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataModel: [{
    "_id": "58a1ba69af38fd34724f95db",
    "username": "tim",
    "pollName": "favourite hero",
    "pollOptions": [
      {
        "option": "batman",
        "score": 0,
        "_id": "58a1ba69af38fd34724f95dd"
      }
    ]
  }],
      pollName: '',
      options: []
    }
  }

  componentWillMount = () => {

    // get initial data from db and populate state
    const dataModel = fetch("/api/poll/")
                      .then( (blob) => {
                        return blob.json()
                      })
                      .then( (j) => {
                       this.setState({
                         dataModel: j
                       })
                      })
  }

  handlePollEdit = (pollName, options, pollId) => {
    // const poll = this.state.polls.find(p => p._id === pollId)
    // poll.pollName = pollName
    // poll.pollOptions.map(val) => {return val.option = }
    // this.setState({polls: this.state.polls})
    this.setState({pollName,options})
  }

  handlePollNew = (pollName, options, pollID) => {
    this.setState({pollName,options})
  }

  render() {
    //console.log(this.state.dataModel)
    return (
      <Grid >
        <ViewPolls dataModel={this.state.dataModel} />
        <Register />
        <UserSettings />
        <PollCreator onUserInput = {this.handlePollNew} />
        <EditPoll dataModel={this.state.dataModel} pollId="58a1ba69af38fd34724f95db" onUserInput = {this.handlePollEdit} />
        <DisplayPoll dataModel={this.state.dataModel} pollId="58a1ba69af38fd34724f95db" />
      </Grid>
    )
  }
};

export default Dashboard;