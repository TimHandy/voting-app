'use strict'

import React from 'react';
import { ListGroup, ListGroupItem} from 'react-bootstrap';

const ViewPolls = (props) => {

  // console.log('datamodel: ', props.dataModel)

  const handleClick = (poll) => {
    props.onUserClick(poll)
  }

  const polls = props.dataModel.map((poll, idx) => {
    return <ListGroupItem key={poll._id} header={poll.pollName} href="#" onClick={handleClick.bind(this, poll)}>
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