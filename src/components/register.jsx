import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { registerUser } from '../actions/userActions';
import { connect } from 'react-redux';

class Register extends Component {
  disabled = true;
  usernameValid = false;
  passwordValid = false;
  showErrors = false;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handleUsernameInput = (event) => {
    this.setState({ username: event.target.value });
    this.handleValidations();
  }

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value });
    this.handleValidations();
  }

  handleRegistration = (e) => {
    e.preventDefault();
    if (!this.disabled) {
      this.props.registerUser(this.state)
    }
  }

  handleValidations = () => {
    if (this.state.username.length > 2) {
      this.usernameValid = true;
    } else {
      this.showErrors = true;
      this.usernameValid = false;
    }
    if (this.state.password.length > 4) {
      this.passwordValid = true;
    } else {
      this.showErrors = true;
      this.passwordValid = false;
    }
    if (this.usernameValid && this.passwordValid) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }

  render() {
    if (this.props.user.username) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="auth-form-container">
        <form>
          <label htmlFor="username">Username
            {
              this.showErrors
                && !this.usernameValid
                ? <span>Username must have at least 3 characters</span>
                : null
            }
          </label>
          <input
            type="text"
            onChange={this.handleUsernameInput}
          />
          <label htmlFor="password">Password
            {
              this.showErrors
                && !this.passwordValid
                ? <span>Password must have at least 4 characters</span>
                : null
            }
          </label>
          <input
            type="password"
            onChange={this.handlePasswordInput}
          />
          <div className="button-container">
            <button
              className="action-button"
              disabled={this.disabled}
              onClick={this.handleRegistration}
            >Register</button>
            <Link to="/">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { registerUser })(Register);