import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class EditPoll extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      options: []
    }
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
            name="title" 
            required 
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Enter a Title</HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
          >
          <FormControl
            type="text"
            name="options" 
            required 
            value={this.state.options}
            placeholder="Options"
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Options, separated by commas</HelpBlock>
        </FormGroup>

      </form>
    );
  }
}

module.exports = EditPoll