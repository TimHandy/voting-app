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

  handlePollEdit = (poll) => {
    this.setState({poll})
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

  handleMyPolls = (poll) => {
    this.props.onUserClick("temp")
    this.setState(
        {
          display: "EditPoll",
          poll : poll
        }
      )
  }

  render() {
    return (
      <Grid >
        {this.props.display === 'MyPolls' ? (this.state.display = "MyPolls", <MyPolls dataModel={this.state.dataModel} loggedInUser = {this.props.loggedInUser} onUserClick = {this.handleMyPolls}/>) : null}
        {this.state.display === 'Register' ? <Register /> : null}
        {this.state.display === 'ViewPolls' ? <ViewPolls dataModel={this.state.dataModel} onUserClick = {this.handleDisplayPoll}/> : null}
        {this.state.display === 'UserSettings' ? <UserSettings /> : null}
        {this.state.display === 'PollCreator' ? <PollCreator onUserInput = {this.handlePollNew} /> : null}
        {this.state.display === 'EditPoll' ? <EditPoll onUserInput = {this.handlePollEdit} poll = {this.state.poll}/> : null}
        {this.state.display === 'DisplayPoll' ?  <DisplayPoll poll = {this.state.poll} /> : null}
       
      </Grid>
    )
  }
};

export default Dashboard;