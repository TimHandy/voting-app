'use strict'

import React from 'react';
import { ListGroup, ListGroupItem} from 'react-bootstrap';

const ViewPolls = (props) => {

  const polls = props.dataModel.map((poll, idx) => {
    return <ListGroupItem key={poll._id} header={poll.pollName} href="#">
      {poll.username}
    </ListGroupItem>
  })

  return (
  <ListGroup>
   {polls}
  </ListGroup>
  );
}

export default ViewPolls;