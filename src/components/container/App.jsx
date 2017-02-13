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
    }
  }
  render() {
    return (
      <Grid fluid style={{"paddingTop": 50}}>
        <MainNav />
        <MainJumbotron />
        <Dashboard dataModel={this.props.dataModel}/>
        <Footer />
      </Grid>
    )
  }
}

module.exports = App
