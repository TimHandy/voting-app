'use strict'

import React from 'react'
// import '../../css/styles.scss'
import './app.css'
import Controls from 'Controls'
import Board from 'Board'
import {Button, Grid, DropdownButton, MenuItem} from 'react-bootstrap'

// import Game from '../modules/game.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cellsStatus: '',
      pause: false,
      counter: 0,
      game: ''
    }
  }
    render() {
    return (
      <Grid fluid>
            <div className="header clearfix">
              <nav>
                <ul className="nav nav-pills pull-right">
                  <li role="presentation" className="active"><a href="#">Home</a></li>
                  <li role="presentation"><a href="#">About</a></li>
                  <li role="presentation"><a href="#">Contact</a></li>
                </ul>
              </nav>
              <h3 className="text-muted">Project name</h3>
            </div>

            <div className="jumbotron">
              <h1>Jumbotron heading</h1>
              <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <Button>test</Button>
                <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                  <MenuItem eventKey="1">Dropdown link</MenuItem>
                  <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>
              </div>
            </div>            

              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">JavaScript</a></li>
                </ul>
              </div>


            <footer className="footer">
              <p>&copy; 2016 Company, Inc.</p>
            </footer>

          </Grid>
      )
    }
}

module.exports = App
