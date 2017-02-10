'use strict'

import React from 'react';
import {Button, Grid, Col, Row} from 'react-bootstrap';
import PollList from './PollList'

class Welcome extends React.Component {
  render() {
    return (
      <Grid>
        <PollList />
      </Grid>
    )
  }
};

export default Welcome;