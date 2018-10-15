import React from 'react';
import { Link } from 'react-router-dom';

const Comment = props => {
  return (
    <div className="comment-card">
      <Link to={`/users/${props.comment.author.id}`}>
        <div>@{props.comment.author.username}</div>
      </Link>
      <div className="comment-content">{props.comment.content}</div>
    </div>
  );
}

export default Comment;