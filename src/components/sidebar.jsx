import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userActions';
class Sidebar extends Component {

  logoutUser = () => {
    this.props.logoutUser();
  }

  render() {
    if (!this.props.user.username) {
      return (
        <div className="sidebar">
          <div className="sidebar-options">
            <Link to="/register">
              <button>Register</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="sidebar">
        <div className="message">Welcome {this.props.user.username}</div>
        <div className="sidebar-options">
          <button>Your Profile</button>
          <button>Upload</button>
          <button
            className="logout-button"
            onClick={this.logoutUser}
          >Logout</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { logoutUser })(Sidebar);