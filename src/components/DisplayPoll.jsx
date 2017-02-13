'use strict'

import React from 'react';
import {ListGroup, ListGroupItem, Grid, Button, Radio} from 'react-bootstrap';
import Chart from './Chart'

const DisplayPoll = (props) => {

  const pollOptions = ['superman', 'he-man', 'superted'].map((option, idx) => {
    return <ListGroupItem className="list-group-item" key={idx}><Radio name='radioGroup'>{option}</Radio></ListGroupItem>
  })

  return (
    <div>
      <h2>Favourite Superhero </h2>
      <Chart />
      <h3>Poll Options </h3>
        <ListGroup>
          {pollOptions}
        </ListGroup>
      <Button>Submit Vote</Button>
    </div>
  );
}

export default DisplayPoll;