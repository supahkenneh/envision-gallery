import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/commentActions';

class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  handleChange = (event) => {
    this.setState({ content: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.props.photoId, this.state)
  }

  render() {
    return (
      <div className="comment-form-container">
        <form>
          <label htmlFor="comment-label" className="comment-label">Add a Comment:</label>
          <textarea onChange={this.handleChange}></textarea>
          <button
            className="action-button"
            onClick={this.handleSubmit}
          >Comment</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment })(NewCommentForm);