'use strict'

import React from 'react'
import {Button, Grid, Col, Row} from 'react-bootstrap'
import ViewPolls from './ViewPolls'
import Register from './Register'
import UserSettings from './UserSettings'

class Dashboard extends React.Component {
  render() {
    return (
      <Grid>
        <ViewPolls />
        <Register />
        <UserSettings />
      </Grid>
    )
  }
};

export default Dashboard;