import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class NewPoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPollName: '',
      newPollOptions: []
    }
  }

  submitHandleChange = (e) => {
    e.preventDefault()
    const updatedPollOptions = this
      .state
      .newPollOptions
      .replace(/[\s,]+/g, ',')
      .split(',')

    const newOptions = updatedPollOptions.map(option => {
      return {'option': option, 'score': 0}
    })

    fetch("/api/poll/", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({username: 'tim', pollName: this.state.newPollName, pollOptions: newOptions})
    }).then((blob) => {
      return blob.json()
    }).then((data) => {
      this
        .props
        .onUserInput(data.poll)
      //console.log(data.poll)
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form>
        <ControlLabel>Create a new poll</ControlLabel>

        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            name="newPollName"
            required
            value={this.state.newPollName}
            placeholder="New poll name"
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Enter a new poll name</HelpBlock>
        </FormGroup>

        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            name="newPollOptions"
            required
            value={this.state.newPollOptions}
            placeholder="new Poll Options"
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>new poll options, separated by commas</HelpBlock>
        </FormGroup>
        {/*<input type="submit" value="Submit" />              */}
        <Button onClick={this.submitHandleChange}>Submit Poll</Button>
      </form>
    );
  }
}

module.exports = NewPoll