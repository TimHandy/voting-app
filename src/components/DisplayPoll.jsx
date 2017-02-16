'use strict'

import React from 'react';
import {ListGroup, ListGroupItem, Grid, Button, Radio} from 'react-bootstrap';
import Chart from './Chart'

class DisplayPoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showChart: false
    }
  }

  handleClick = (arg) => {
    this.props.onUserClick(arg)
    this.setState({showChart : true})
  }

  render() {
    const pollOptions = this.props
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
        {this.state.showChart === true
          ? <Chart poll={this.props.poll}/>
          : null}
        <h2>{this.props.poll.pollName}</h2>
        <h3>Poll Options</h3>
        <ListGroup>
          {pollOptions}
        </ListGroup>
        <Button onClick={this.handleClick.bind(this)}>Submit Vote</Button>
        <Button onClick={this.handleClick.bind(this, "ViewPolls")}>Return to Polls</Button>
      </div>
    );
  }
}

module.exports = DisplayPoll;