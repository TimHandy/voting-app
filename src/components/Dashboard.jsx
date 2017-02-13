'use strict'

import React from 'react'
import {Button, Grid, Col, Row} from 'react-bootstrap'
import ViewPolls from './ViewPolls'
import Register from './Register'

class Dashboard extends React.Component {
  render() {
    return (
      <Grid>
        <ViewPolls />
        <Register />
      </Grid>
    )
  }
};

export default Dashboard;