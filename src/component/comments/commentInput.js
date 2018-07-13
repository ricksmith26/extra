import React from 'react';
import * as api from '../../api';

class MessageInput extends React.Component {
  state = {
    userInput: ''
  };

  render() {
    return (
      <div className="messageInputContainer">
        <input
          type="text"
          onKeyUp={this.handleKeyPress}
          onChange={this.handleInputChange}
          value={this.state.userInput}
        />
      </div>
    );
  }
  handleKeyPress = event => {
    if (event.keyCode === 13) {
      this.handlePostMessage('5b3b73b09289af05a338beb2', {
        body: this.state.userInput,
        created_by: 'jessjelly'
      });
    }
  };

  handleInputChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  handlePostMessage = async () => {
    const comment = {
      body: this.state.userInput,
      created_by: 'jessjelly'
    };

    await api.postComment('5b3b73b09289af05a338beb2', comment);
    this.setState({ userInput: '' });
  };
}

export default MessageInput;
