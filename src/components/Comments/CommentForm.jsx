import React, { Component } from 'react';

class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }
  render() {
    return (
      <div className="new-comment-form-container">
        <form>
          <label htmlFor="comment-label" className="comment-label">Add a Comment:</label>
          <textarea></textarea>
          <button className="action-button">Comment</button>
        </form>
      </div>
    );
  }
}

export default NewCommentForm;