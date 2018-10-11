import React from 'react';
import { Link } from 'react-router-dom';

const UserPhoto = props => {
  return (
    <div className="user-photo-card">
      <Link to={`/photo/${props.photo.id}`}>
        <div className="photo-container">
          <img src={props.photo.link} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default UserPhoto;