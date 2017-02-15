'use strict'

import React from 'react';
import { ListGroup, ListGroupItem, Grid, Button, Row} from 'react-bootstrap';

const MyPolls = (props) => {

  const handleClick = (poll) => {
    props.onUserClick(poll)
  }

  const myPolls = props.dataModel.filter(p => p.username === props.loggedInUser)
  const polls = myPolls.map((poll, idx) => {
    return <ListGroupItem key={poll._id} header={poll.pollName} href="#">
        <Button onClick={handleClick.bind(this, poll)}>Edit Poll</Button>
    </ListGroupItem>
  })

  return (
    <Grid>
      <ListGroup>
        {polls}
      </ListGroup>
      <Button >New Poll</Button>
    </Grid>
  );
}

export default MyPolls;