import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../actions/userActions';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameInput = (event) => {
    this.setState({ username: event.target.value })
  }

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value })
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
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
            type="password"
            onChange={this.handlePasswordInput}
          />
          <div className="button-container">
            <button
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
