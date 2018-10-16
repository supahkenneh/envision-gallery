import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://www.github.com/supahkenneh" target="_blank">
          <div className="github">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/kenny-chung-522075169/" target="_blank">
          <div className="linkedin">
            <img src="https://image.flaticon.com/icons/svg/34/34227.svg" alt="" />
          </div>
        </a>
      </div>
    );
  }
}

export default Footer;