import React from 'react';

const MainPhoto = props => {
  if (props.main) {
    return (
      <div className="main-image-container">
        <img src={props.main.link} alt="" />
      </div>
    );
  }
  return (
    <div className="main-image-container">
      <div>No Image</div>
    </div>
  )
}

export default MainPhoto;