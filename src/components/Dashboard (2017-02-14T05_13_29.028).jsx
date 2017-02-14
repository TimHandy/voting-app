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
      polls: this.props.dataModel,
      pollName: '',
      options: []
    }
  }

  handlePollEdit = (pollName, options, pollID) => {
    const poll = this.props.dataModel.find(p => p._id === this.props.pollId)
    poll.pollName = pollName
    poll.pollOptions.map(val) => {return val.option = }
    this.setState({polls})
  }

  handlePollNew = (pollName, options, pollID) => {
    this.setState({pollName,options})
  }

  render() {
    return (
      <Grid >
        <ViewPolls dataModel={this.props.dataModel} />
        <Register />
        <UserSettings />
        <PollCreator onUserInput = {this.handlePollEdit} />
        <EditPoll dataModel={this.props.dataModel} pollId="58a1ba69af38fd34724f95db" onUserInput = {this.handlePollEdit} />
        <DisplayPoll dataModel={this.props.dataModel} pollId="58a1ba69af38fd34724f95db" />
      </Grid>
    )
  }
};

export default Dashboard;