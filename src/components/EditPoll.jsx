import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class EditPoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editPollName: this.props.poll.pollName,
      editPollOptions: this.props.poll.pollOptions.map(poll => poll.option).join(',')
    }
  }

  // submitHandleChange = (e) => {
  //   e.preventDefault()
  //   const poll = this.props.poll
  //   poll.pollName = this.state.editPollName
  //   poll.pollOptions = this.state.editPollOptions.replace(/[\s,]+/g, ',').split(',')
  //   this.props.onUserInput(poll)
  // }

  submitHandleChange = (e) => {
    e.preventDefault()
    const updatedPollOptions = this
      .state
      .editPollOptions
      .replace(/[\s,]+/g, ',')
      .split(',')

    const newOptions = updatedPollOptions.map(option => {
      return {'option': option, 'score': 0}
    })

    fetch(`/api/poll/${this.props.poll._id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({username: 'tim', pollName: this.state.editPollName, pollOptions: newOptions})
    }).then((blob) => {
      return blob.json()
    }).then((data) => {
      this
        .props
        .onUserInput(data.poll)

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
        <ControlLabel>Edit Poll</ControlLabel>

        <FormGroup
          controlId="formBasicText"
          >
          <FormControl
            type="text"
            name="editPollName" 
            required 
            defaultValue={this.state.editPollName}
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Edit Poll Name</HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
          >
          <FormControl
            type="text"
            name="editPollOptions" 
            required 
            defaultValue={this.state.editPollOptions}
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Edit options, separated by commas</HelpBlock>
        </FormGroup>

        <Button onClick={this.submitHandleChange}>Save Poll</Button>
      </form>
    );
  }
}

module.exports = EditPoll