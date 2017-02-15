'use strict'

import React from 'react';
import {ListGroup, ListGroupItem, Grid, Button, Radio} from 'react-bootstrap';
import Chart from './Chart'

const DisplayPoll = (props) => {

  console.log(props.poll)

  const pollOptions = props
    .poll
    .pollOptions
    .map(option => {

      return (
        <ListGroupItem className="list-group-item" key={option._id}>
          <Radio name='radioGroup'>
            {option.option}
          </Radio>
        </ListGroupItem>
      )
    })

  return (
    <div>
      <h2>{props.poll.pollName}</h2>
      <Chart poll={props.poll}/>
      <h3>Poll Options</h3>
      <ListGroup>
        {pollOptions}
      </ListGroup>
      <Button>Submit Vote</Button>
    </div>
  );
}

export default DisplayPoll;