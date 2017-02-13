import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class PollCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      options: []
    }
  }

  // getValidationStateUsername = () => {
  //   const length = this.state.username.length;
  //   if (length > 6) 
  //     return 'success';
  //   else if (length > 5) 
  //     return 'warning';
  //   else if (length > 0) 
  //     return 'error';
  //   }
  
  // getValidationStateEmail = () => {
  //   const length = this.state.email.length;
  //   if (length > 10) 
  //     return 'success';
  //   else if (length > 5) 
  //     return 'warning';
  //   else if (length > 0) 
  //     return 'error';
  //   }
  
  // getValidationStatePassword = () => {
  //   const length = this.state.password.length;
  //   if (length > 10) 
  //     return 'success';
  //   else if (length > 5) 
  //     return 'warning';
  //   else if (length > 0) 
  //     return 'error';
  //   }

  // getValidationPasswordConfirm = () => {
  //     const length = this.state.passwordConfirm.length;
  //     if (length > 10 && (this.state.passwordConfirm === this.state.password)) 
  //       return 'success';
  //     else if (length > 5) 
  //       return 'warning';
  //     else if (length > 0) 
  //       return 'error';
  //     }
  
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

module.exports = PollCreator