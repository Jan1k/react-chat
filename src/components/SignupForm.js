import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-fetch';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  },
});
class SignupForm extends Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true
    },
    repeatedPassword:{
      value: '',
      isValid: true
    }
  }
  validate = () => {
    const {password, repeatedPassword} = this.state;
    const isValid = password.value === repeatedPassword.value;
    this.setState({
      password: { ...password, isValid },
      repeatedPassword: {  ...repeatedPassword, isValid },
    });
    return isValid; 
  }
  
  handleInputChange = (event) => {
    event.persist();
    const {name,value} = event.target;
    this.setState((prevState) => ({
      [name]: {
        ...prevState.name,
        value,
      }
    }));

  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.validate()){
      return;
    }
    const {username, password} = this.state;
    console.log('Signup:', username.value, password.value);
  }

  render() {
    const {classes} = this.props;
    const {username, password, repeatedPassword} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <TextField
          required
          fullWidth
          label="Username"
          name="username"
          placeholder="Type your username..."
          type="text"
          autoComplete="username"
          value={username.value}
          onChange={this.handleInputChange}
          error={!username.isValid}
        />
        <TextField
          required
          fullWidth
          label="Password"
          name="password"
          placeholder="Type your password..."
          type="password"
          autoComplete="current-password"
          value={password.value}
          onChange={this.handleInputChange}
          error={!password.isValid}
        />
        <TextField
          required
          fullWidth
          label="Repeat password"
          name="repeatedPassword"
          placeholder="Repeat your password..."
          type="password"
          autoComplete="new-password"
          value={repeatedPassword.value}
          onChange={this.handleInputChange}
          error={!repeatedPassword.isValid}      
        />
        <Button
          fullWidth
          type="submit"
          variant="contained" 
          color="primary"
          className={classes.signUpButton}
        >
          Signup
        </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(SignupForm);
