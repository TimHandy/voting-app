'use strict'

import React from 'react';
import { ListGroup, ListGroupItem, Grid, Button, Row} from 'react-bootstrap';

const MyPolls = (props) => {

  const handleClick = (poll, display) => {
    props.onUserClick(poll, display)
  }

  const myPolls = props.dataModel.filter(p => p.username === props.loggedInUser)
  const polls = myPolls.map((poll, idx) => {
    return <ListGroupItem key={poll._id} header={poll.pollName} href="#">
        <Button onClick={handleClick.bind(this, poll, 'EditPoll')}>Edit Poll</Button>
    </ListGroupItem>
  })

  return (
    <Grid>
      <Button onClick={handleClick.bind(this, props.dataModel[0], 'NewPoll')}>New Poll</Button>
      <ListGroup>
        {polls}
      </ListGroup>
    </Grid>
  );
}

export default MyPolls;