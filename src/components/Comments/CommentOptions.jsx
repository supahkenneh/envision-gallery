import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editComment, deleteComment } from '../../actions/commentActions';

class CommentOptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleEdit = id => {
    console.log(id);
  }

  handleDelete = id => {
    this.props.deleteComment(id);
  }

  render() {
    return (
      <div className="comment-button-container">
        <button onClick={() => this.handleEdit(this.props.comment.id)}>Edit</button>
        <button onClick={() => this.handleDelete(this.props.comment.id)}>Delete</button>
      </div>
    );
  }
}

export default connect(null, { editComment, deleteComment })(CommentOptions);