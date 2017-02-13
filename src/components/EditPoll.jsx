import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';

class EditPoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editPollName: this.props.dataModel.find(p => p._id === this.props.pollId).pollName,
      editPollOptions: this.props.dataModel.find(p => p._id === this.props.pollId).pollOptions
    }
  }

  submitHandleChange = () => {
    this.props.onUserInput(
      this.state.editPollName,
      this.state.editPollOptions
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    console.log(this.state.editPollOptions)
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