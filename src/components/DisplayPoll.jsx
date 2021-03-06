'use strict'

import React from 'react';
import {ListGroup, ListGroupItem, Grid, Button, Radio} from 'react-bootstrap';
import ChartDisplay from './Chart'

class DisplayPoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showChart: false,
      selectedItem: "",
      voted: false
    }
  }

  handleClickSubmitVote = () => {
    this.state.selectedItem !== "" ? (this.setState({showChart : true, voted: true}), this.props.onUserSubmitVote(this.state.selectedItem) ) : alert('Selection required!')
      
  }

  handleClickReturnToPolls = (viewToShow) => {
    this.props.onUserClick(viewToShow)
  }

  handleRadioChoice = (e) => {
    const selectedItem = e.target.value
    this.setState({selectedItem})
  }

 handleClickShowChart = () => {
    this.setState({showChart : true})
  }

  render() {
    const pollOptions = this.props
      .poll
      .pollOptions
      .map(option => {

        return (
          <ListGroupItem className="list-group-item" key={option._id}>
            <Radio onClick={this.handleRadioChoice} name='radioGroup' value={option.option}>
              {option.option}
            </Radio>
          </ListGroupItem>
        )
      })
    return (
      <div>
        {this.state.showChart === true
          ? <ChartDisplay poll={this.props.poll}/>
          : null}
        <h2>{this.props.poll.pollName}</h2>
        <h3>Poll Options</h3>
        <ListGroup>
          {pollOptions}
        </ListGroup>
        <Button disabled={this.state.voted === true} onClick={this.handleClickSubmitVote.bind(this)}>Submit Vote</Button>
        <Button onClick={this.handleClickReturnToPolls.bind(this, "ViewPolls")}>Return to Polls</Button>
        <Button onClick={this.handleClickShowChart.bind(this)}>View Results</Button>
      </div>
    );
  }
}

module.exports = DisplayPoll;