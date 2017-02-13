import React from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class UserSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'davesmith',
      email: 'dave@dave.com',
      password: 'password101',
      passwordConfirm: 'password101'
    }
  }

  getValidationStateUsername = () => {
    const length = this.state.username.length;
    if (length > 6) 
      return 'success';
    else if (length > 5) 
      return 'warning';
    else if (length > 0) 
      return 'error';
    }
  
  // getValidationStateEmail = () => {
  //   const length = this.state.email.length;
  //   if (length > 10) 
  //     return 'success';
  //   else if (length > 5) 
  //     return 'warning';
  //   else if (length > 0) 
  //     return 'error';
  //   }
  
  getValidationStatePassword = () => {
    const length = this.state.password.length;
    if (length > 10) 
      return 'success';
    else if (length > 5) 
      return 'warning';
    else if (length > 0) 
      return 'error';
    }

  getValidationPasswordConfirm = () => {
      const length = this.state.passwordConfirm.length;
      if (length > 10 && (this.state.passwordConfirm === this.state.password)) 
        return 'success';
      else if (length > 5) 
        return 'warning';
      else if (length > 0) 
        return 'error';
      }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form >
        <ControlLabel>Change User Settings</ControlLabel>

        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationStateUsername()}>
          <FormControl
            type="text"
            name="username"
            defaultValue={this.state.username}
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Username should be at least 10 characters</HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
          >
          <FormControl
            type="email"
            name="email"
            defaultValue={this.state.email}
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Email should be properly formatted</HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationStatePassword()}>
          <FormControl
            type="password"
            name="password"
            defaultValue = {this.state.password}
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Password should be at least 10 characters.</HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationPasswordConfirm()}>
          <FormControl
            type="password"
            name="passwordConfirm"
            defaultValue ={this.state.passwordConfirm}
            onChange={this.handleChange}/>
          <FormControl.Feedback/>
          <HelpBlock>Password should be at least 11 characters, and match the one entered above.</HelpBlock>
        </FormGroup>

      </form>
    );
  }
}

module.exports = UserSettings