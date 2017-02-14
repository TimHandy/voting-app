import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class PollCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPollName: '',
      newPollOptions: []
    }
  }
  
  submitHandleChange = () => {
    this.props.onUserInput(
      this.state.newPollName,
      this.state.newPollOptions.replace(/[\s,]+/g, ',').split(','),
      this.props.pollID
    );
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

        <FormGroup
          controlId="formBasicText"
          >
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

        <FormGroup
          controlId="formBasicText"
          >
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
        
        <Button onClick={this.submitHandleChange}>Submit Poll</Button>
      </form>
    );
  }
}

module.exports = PollCreator