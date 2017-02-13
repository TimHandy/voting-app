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
    }
  }
  render() {
    return (
      <Grid >
        <ViewPolls dataModel={this.props.dataModel} />
        <Register />
        <UserSettings />
        <PollCreator />
        <EditPoll />
        <DisplayPoll dataModel={this.props.dataModel} pollId="58a1ba69af38fd34724f95db" />
      </Grid>
    )
  }
};

export default Dashboard;