'use strict'

import React from 'react';
import {ListGroup, ListGroupItem, Grid, Button, Radio} from 'react-bootstrap';
import Chart from './Chart'

class DisplayPoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poll: this.props.dataModel.find(p => p._id === this.props.pollId)
    }
  }

  render() {
    const poll = this.props
      .dataModel
      .find(p => p._id === this.props.pollId)

    const pollOptions = poll
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
        <h2>Favourite Superhero</h2>
        <Chart poll = {this.state.poll} />
        <h3>Poll Options</h3>
        <ListGroup>
          {pollOptions}
        </ListGroup>
        <Button>Submit Vote</Button>
      </div>
    );
  }
}

export default DisplayPoll;