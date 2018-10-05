import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Sidebar extends Component {

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
            onClick={this.handleLogout}
          >Logout</button>
        </div>
      </div>
    )
  }
}

export default Sidebar;