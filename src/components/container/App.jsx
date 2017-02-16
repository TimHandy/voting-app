'use strict'

import React from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './app.css' 
import {Button, Grid, DropdownButton, MenuItem} from 'react-bootstrap'
import MainNav from '../MainNav'
import MainJumbotron from '../MainJumbotron'
import Dashboard from '../Dashboard'
import Footer from '../Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "Jumbotron",
      loggedInUser: "tim"
    }
  }

  handleMyPoll = (arg) => {
    this.setState(
        {
          display: arg 
        }
      )
  }

  render() {
    return (
      <Grid fluid style={{"paddingTop": 50}}>
        <MainNav loggedInUser={this.state.loggedInUser} onUserClick = {this.handleMyPoll}/>
        {!this.state.loggedInUser ?  <MainJumbotron /> : null}
       {this.state.loggedInUser ? <Dashboard loggedInUser={this.state.loggedInUser} dataModel={this.props.dataModel} display = {this.state.display} onUserClick = {this.handleMyPoll}/> : null}
        <Footer />
      </Grid>
    )
  }
}

module.exports = App
