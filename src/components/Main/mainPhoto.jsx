import React from 'react';

const MainPhoto = props => {
  if (props.main) {
    return (
      <div className="main-image-container">
        <div className="image-container">
          <img src={props.main.link} alt="" />
        </div>
        <div className="owner-container">
          <div className="owner">@{props.main.owner.username}</div>
        </div>
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