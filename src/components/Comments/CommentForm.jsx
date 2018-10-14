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
    // need to get id of photo here
    e.preventDefault();
    this.props.addComment(this.state)
  }

  render() {
    return (
      <div className="new-comment-form-container">
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