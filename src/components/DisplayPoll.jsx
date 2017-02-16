'use strict'

import React from 'react';
import {ListGroup, ListGroupItem, Grid, Button, Radio} from 'react-bootstrap';
import Chart from './Chart'

const DisplayPoll = (props) => {

  const handleClick = (arg) => {
    props.onUserClick(arg)
  }

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
      {props.showChart===true ? <Chart poll={props.poll}/> : null}
      <h2>{props.poll.pollName}</h2>
      <h3>Poll Options</h3>
      <ListGroup>
        {pollOptions}
      </ListGroup>
      <Button onClick={handleClick.bind(this, "showChart")}>Submit Vote</Button>
      <Button onClick={handleClick.bind(this, "ViewPolls")}>Return to Polls</Button>
    </div>
  );
}

export default DisplayPoll;