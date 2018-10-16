import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../actions/userActions';
import { connect } from 'react-redux';

class Login extends Component {
  disabled = true;
  showErrors = false;
  usernameValid = false;
  passwordValid = false;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameInput = (event) => {
    this.setState({ username: event.target.value })
    this.handleValidations()
  }

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value })
    this.handleValidations()
  }

  handleLogin = (e) => {
    e.preventDefault();
    if (!this.disabled) {
      this.props.loginUser(this.state);
    }
  }

  handleValidations = () => {
    if (this.state.username.length) {
      this.usernameValid = true;
    } else {
      this.showErrors = true;
      this.usernameValid = false;
    }
    if (this.state.password.length) {
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
                ? <span>Must be filled</span>
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
                ? <span>Must be filled</span>
                : null
            }
          </label>
          <input
            type="password"
            onChange={this.handlePasswordInput}
          />
          <div className="button-container">
            <button
              disabled={this.disabled}
              className="action-button"
              onClick={this.handleLogin}
            >Login</button>
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

export default connect(mapStateToProps, { loginUser })(Login);
