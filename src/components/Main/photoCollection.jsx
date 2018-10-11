import React from 'react';
import { Link } from 'react-router-dom';
import CollectionPhoto from './collectionPhoto';

const PhotoCollection = props => {
  if (props.collection) {
    return (
      <div className="photo-collection">
        {
          props.collection.map(photo => {
            return (
              <Link to={`/photo/${photo.id}`} key={photo.id}>
                <CollectionPhoto
                  key={photo.id}
                  link={photo.link}
                  owner={photo.owner.username}
                />
              </Link>
            )
          })
        }
      </div>
    );
  }
  return (
    <div className="photo-collection">
      <div>No Photos</div>
    </div>
  )
}

export default PhotoCollection;