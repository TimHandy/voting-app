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
  render() {
    return (
      <Grid>
        <ViewPolls />
        <Register />
        <UserSettings />
        <PollCreator />
        <EditPoll />
        <DisplayPoll />
      </Grid>
    )
  }
};

export default Dashboard;