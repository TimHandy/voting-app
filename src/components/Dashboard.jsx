'use strict'

import React from 'react'
import {Button, Grid, Col, Row} from 'react-bootstrap'
import ViewPolls from './ViewPolls'
import Register from './Register'
import UserSettings from './UserSettings'
import NewPoll from './NewPoll'
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
      display: "ViewPolls",
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
  console.log(poll)
  const arrayIndex = this.state.dataModel.findIndex(obj => obj._id === poll._id)

  const updatedDataModel = this.state.dataModel.concat()
  updatedDataModel.splice(arrayIndex, 1, poll)
  console.log(updatedDataModel)      

    this.setState({
      poll, 
      dataModel: updatedDataModel
  })
    this.props.onUserClick("MyPolls")
  }

  handlePollNew = (poll) => {
    console.log('2: ',poll)
    const updatedDataModel = this.state.dataModel.concat(poll)
    this.setState({dataModel: updatedDataModel, poll})
    this.props.onUserClick("MyPolls")
  }

  handleDisplayPoll = (poll) => {
    this.props.onUserClick("")
    this.setState(
        {
          poll,
          display: "DisplayPoll"
        }
      )
  }

  handleMyPolls = (poll, display) => {
    this.props.onUserClick("")
    this.setState({display,poll})
  }

  handleSubmitScore = (arg) => {
    if (arg === "ViewPolls") {
      this.props.onUserClick("")
      this.setState({display: arg, showChart: false})
    }
  }

  render() {
    return (
      <Grid >
        {/*These components render based on feedback from the navbar*/}
        {this.props.display === 'MyPolls' ? (this.state.display = "MyPolls", <MyPolls dataModel={this.state.dataModel} loggedInUser = {this.props.loggedInUser} onUserClick = {this.handleMyPolls}/>) : null}
        {this.props.display === 'ViewPolls' || this.state.display === 'ViewPolls' ? (this.state.display = "ViewPolls", <ViewPolls dataModel={this.state.dataModel} onUserClick = {this.handleDisplayPoll}/>) : null}

        {this.state.display === 'Register' ? <Register /> : null}
        {this.state.display === 'UserSettings' ? <UserSettings /> : null}
        {this.state.display === 'NewPoll' ? <NewPoll onUserInput = {this.handlePollNew} /> : null}
        {this.state.display === 'EditPoll' ? <EditPoll onUserInput = {this.handlePollEdit} poll = {this.state.poll}/> : null}
        {this.state.display === 'DisplayPoll' ?  <DisplayPoll poll = {this.state.poll} onUserClick = {this.handleSubmitScore} showChart = {this.state.showChart}/> : null}
       
      </Grid>
    )
  }
};

export default Dashboard;