import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { registerUser } from '../actions/userActions';
import { connect } from 'react-redux';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handleUsernameInput = (event) => {
    this.setState({ username: event.target.value })
  }

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value })
  }

  handleEmailInput = (event) => {
    this.setState({ email: event.target.value })
  }

  handleRegistration = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state)
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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            onChange={this.handleUsernameInput}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            onChange={this.handlePasswordInput}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            onChange={this.handleEmailInput}
          />
          <div className="button-container">
            <button
              className="action-button"
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