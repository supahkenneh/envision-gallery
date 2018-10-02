import React from 'react';
import CollectionPhoto from './collectionPhoto';

const PhotoCollection = props => {
  if (props.collection) {
    return (
      <div className="photo-collection">
        {
          props.collection.map(photo => {
            return (
              <CollectionPhoto
                key={photo.id}
                link={photo.link}
                owner={photo.owner.username}
              />
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