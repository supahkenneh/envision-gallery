import React from 'react';

const SidebarPhoto = props => {
  return (
    <div className="sidebar-img">
      <div className="sidebar-img-container">
        <img src={props.photo.link} alt="" />
      </div>
    </div>
  );
}

export default SidebarPhoto;