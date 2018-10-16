import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.github.com/supahkenneh" target="_blank" rel="noopener noreferrer">
        <div className="github">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/kenny-chung-522075169/" target="_blank" rel="noopener noreferrer">
        <div className="linkedin">
          <img src="https://image.flaticon.com/icons/svg/34/34227.svg" alt="" />
        </div>
      </a>
    </div>
  );
}

export default Footer;