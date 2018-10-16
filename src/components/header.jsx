import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <div className="main-header">
      <Link to="/">
        <h1 className="app-name">envision</h1>
      </Link>
      <div className="app-description">
        <p>a place for visual creators to share and be inspired</p>
      </div>
    </div>
  )
}

export default Header;
