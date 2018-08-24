import React from 'react';
import './MyComponent.css';

class MyComponent extends React.Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      content: '',
    };
  }

  handleContentOnChange = event => {
    // State is immutable
    // Use setState to alter the state, causing the React lifecycle to kick in
    // Note: setState is asynchronous, doesn't happen immediately, but looks like it
    this.setState({
      content: event.target.value,
    });
  };

  render() {
    const { content } = this.state;
    const { placeholder } = this.props;
    return (
      <div>
        <p>{content}</p>
        <input
          name="content"
          value={content}
          onChange={this.handleContentOnChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default MyComponent;
