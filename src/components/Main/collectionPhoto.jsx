import React from 'react';

const CollectionPhoto = props => {
  return (
    <div className="collection-photo-container">
      <div className="photo-container">
        <img src={props.link} alt="" />
      </div>
      <div className="owner-container">
        <div className="owner">@{props.owner}</div>
      </div>
    </div>
  );
}

export default CollectionPhoto;