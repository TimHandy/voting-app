'use strict'

import React from 'react'
import {Button, Grid, Col, Row} from 'react-bootstrap'
import ViewPolls from './ViewPolls'
import Register from './Register'
import UserSettings from './UserSettings'
import PollCreator from './PollCreator'
import EditPoll from './EditPoll'
import DisplayPoll from './DisplayPoll'
import MyPolls from './MyPolls'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataModel: [{
                  "_id": "58a1ba69af38fd34724f95db",
                  "username": "tim",
                  "pollName": "favourite hero",
                  "pollOptions": [
                    {
                      "option": "batman",
                      "score": 0,
                      "_id": "58a1ba69af38fd34724f95dd"
                    }
                  ]
                }],
      pollName: '',
      options: [],
      poll: {
            "_id": "58a1ba69af38fd34724f95db",
            "username": "tim",
            "pollName": "favourite hero",
            "pollOptions": [
              {
                "option": "batman",
                "score": 0,
                "_id": "58a1ba69af38fd34724f95dd"
              }
            ]
          },
      display: "ViewPolls"
    }
  }

  componentWillMount = () => {

    // get initial data from db and populate state
    const dataModel = fetch("/api/poll/")
                      .then( (blob) => {
                        return blob.json()
                      })
                      .then( (j) => {
                       this.setState({
                         dataModel: j
                       })
                      })
  }

  handlePollEdit = (pollName, options, pollId) => {
    // const poll = this.state.polls.find(p => p._id === pollId)
    // poll.pollName = pollName
    // poll.pollOptions.map(val) => {return val.option = }
    // this.setState({polls: this.state.polls})
    this.setState({pollName,options})
  }

  handlePollNew = (pollName, options, pollID) => {
    this.setState({pollName,options})
  }

  handleDisplayPoll = (poll) => {
    this.setState(
        {
          poll,
          display: "DisplayPoll"
        }
      )
  }

  render() {
    return (
      <Grid >
        {this.props.display === 'MyPolls' ? <MyPolls dataModel={this.state.dataModel} loggedInUser = {this.props.loggedInUser}/> : null}
        {this.props.display === 'MyPolls' ? this.state.display = '' : null}
        {this.state.display === 'Register' ? <Register /> : null}
        {this.state.display === 'ViewPolls' ? <ViewPolls dataModel={this.state.dataModel} onUserClick = {this.handleDisplayPoll}/> : null}
        {this.state.display === 'UserSettings' ? <UserSettings /> : null}
        {this.state.display === 'PollCreator' ? <PollCreator onUserInput = {this.handlePollNew} /> : null}
        {this.state.display === 'EditPoll' ? <EditPoll dataModel={this.state.dataModel} pollId="58a1ba69af38fd34724f95db" onUserInput = {this.handlePollEdit} /> : null}
        {this.state.display === 'DisplayPoll' ?  <DisplayPoll poll = {this.state.poll} /> : null}
       
      </Grid>
    )
  }
};

export default Dashboard;