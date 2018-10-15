import React from 'react';
import Comment from './Comment';

const Comments = props => {
  return (
    <div className="comment-container">
      {
        props.comments.map(comment => {
          return (
            <Comment comment={comment} key={comment.id} />
          )
        })
      }
    </div>
  )
}

export default Comments;