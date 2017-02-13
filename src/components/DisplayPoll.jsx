'use strict'

import React from 'react';
import {ListGroup, ListGroupItem, Grid} from 'react-bootstrap';

const DisplayPoll = (props) => {

  const pollOptions = ['superman', 'he-man', 'superted'].map((option, idx) => {
    return <ListGroupItem className="list-group-item" key={idx}>{option}</ListGroupItem>
  })

  return (
    <div>
      <h2>Favourite Superhero </h2>
      <h3>Poll Options </h3>
      <ListGroup>
        {pollOptions}
      </ListGroup>
    </div>
  );
}

export default DisplayPoll;