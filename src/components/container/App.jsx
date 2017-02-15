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
      loggedInUser: "Tim"
    }
  }
  render() {
    return (
      <Grid fluid style={{"paddingTop": 50}}>
        <MainNav loggedInUser={this.state.loggedInUser}/>
        {!this.state.loggedInUser ?  <MainJumbotron /> : null}
       
       {this.state.loggedInUser ? <Dashboard loggedInUser={this.state.loggedInUser} dataModel={this.props.dataModel}/> : null}
        
        <Footer />
      </Grid>
    )
  }
}

module.exports = App
