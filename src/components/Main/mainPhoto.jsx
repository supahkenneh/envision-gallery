import React from 'react';

const MainPhoto = props => {
  if (props.main.length > 0) {
    return (
      <div className="main-image-container">
        <img src={props.main[0].link} alt="" />
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