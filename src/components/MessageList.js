import React, { Component } from 'react';
import Message from './Message'

// const MessageList = (props) => {
//   return (
//     <div>
//       <Message />
          // this.props.messages.map()
//     <div>
//   )
// }

class MessageList extends Component {

  render() {
    let messageList = this.props.messages.map( (message, index) => {
      return (
        <Message
          key={index}
          message={message}
          toggleStarHandler={this.props.toggleStarHandler}
          userSelectMessage={this.props.userSelectMessage}
          userReadMessage={this.props.userReadMessage}
        />
      )
    })

      return(
        <div>
          {messageList}
        </div>
      )
  }

}

export default MessageList;
