import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <Link to="/">
          <h1 className="app-name">e n v i s i o n</h1>
        </Link>
        <div className="app-description">
          <p>a place for visual creators to share and be inspired</p>
        </div>
      </div>
    )
  }
}

export default Header;
