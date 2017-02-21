import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/container/App'

// tempoarary datamodel until DB is hooked up.
const dataModel = [
  {
    "_id": "58a1ba69af38fd34724f95db",
    "username": "tim",
    "pollName": "favourite hero",
    "__v": 1,
    "pollOptions": [
      {
        "option": "batman",
        "score": 0,
        "_id": "58a1ba69af38fd34724f95dd"
      },
      {
        "option": "he-man",
        "score": 0,
        "_id": "58a1ba69af38fd34724f95dc"
      },
      {
        "option": "spongebob",
        "score": 0,
        "_id": "58a1ba69af38fd34724f95de"
      }
    ]
  },
  {
    "_id": "58a1bb108810c934540449f3",
    "username": "davo",
    "pollName": "favourite villain",
    "__v": 0,
    "pollOptions": [
      {
        "option": "batman",
        "score": 0,
        "_id": "589b2eee8e38ec2f0880d2ba"
      },
      {
        "option": "she-ra",
        "score": 0,
        "_id": "589b2eee8e38ec2f0880d2b9"
      },
      {
        "option": "spongebob",
        "score": 0,
        "_id": "589b2eee8e38ec2f0880d2bb"
      }
    ]
  }
]

ReactDOM.render(<App dataModel={dataModel} />, document.getElementById('app'))