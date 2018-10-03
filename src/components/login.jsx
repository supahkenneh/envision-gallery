import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

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
    return axios.post('/api/login', this.state)
      .then(response => {
        //save logged in user to localStorage
        window.localStorage.setItem('id', response.data.id);
        window.localStorage.setItem('username', response.data.username);
        window.localStorage.setItem('email', response.data.email);
        this.setState({ isLoggedIn: true })
        this.props.onRedirect(this.state.isLoggedIn);
      })
      .catch(err => console.log(err));
  }

  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
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

export default Login;