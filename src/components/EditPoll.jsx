import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class PollCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Favourite Superhero?',
      options: ['batman', 'he-man', 'superman']
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
        <ControlLabel>Edit Poll</ControlLabel>

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
            value={this.state.options.join(', ')}
            placeholder="Options"
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Options, separated by commas</HelpBlock>
        </FormGroup>

      </form>
    );
  }
}

module.exports = PollCreator