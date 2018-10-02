import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    console.log(this.state);
  }

  handlePasswordInput = (event) => {
    this.setState({ password: event.target.value })
    console.log(this.state);
  }

  render() {
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
            <button className="action-button">Login</button>
            <Link to="/">
              <button className="cancel-button">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;