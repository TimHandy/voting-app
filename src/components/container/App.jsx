'use strict'

import React from 'react'
// import '../css/styles.scss'
import Controls from 'Controls'
import Board from 'Board'
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
      <div style={{
                  width: '50%',
                  margin: '0 auto'
              }}>
        <p>Generation Count</p>
      </div>

      )
    }
}

module.exports = App
