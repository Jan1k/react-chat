import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  signUpButton: {
    marginTop: theme.spacing.unit * 2,
  },
  dense: {
    marginTop: 19,
  },
});
class LoginForm extends Component {
  state = {
    username: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true
    },
  }

  handleInputChange = (event) => {
    event.persist();
    const {name,value} = event.target;
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;
    console.log('Login:', username.value, password.value);
  }

  render() {
    
    const {classes} = this.props;
    const {username, password} = this.state;
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
          margin="dense"
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
          margin="dense"
        />
        <Button
          fullWidth
          type="submit"
          variant="contained" 
          color="primary"
          className={classes.signUpButton}
        >
          Login
        </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);



