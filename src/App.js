import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import ComposeMessage from './components/ComposeMessage'

class App extends Component {
  state = {
    messages: []
  }

async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/messages')
  const json = await response.json()
  this.setState({messages: json})
}

  toggleStarHandler = (message) => {
    //onClick change display if on => off
    message.starred = !message.starred
    this.setState(this.state.messages)
    // this.setState({message.starred: !message.starred})
  }

  userSelectMessage = (message) => {
    message.selected = !message.selected
    this.setState(this.state.messages)
  }
  // removed the .concat(message) from the setState
  // this.setState(this.state.messages.concat(message))

  userReadMessage = (message) => {
    message.read = true
    this.setState(this.state.messages)
  }

  userUnreadMessage = (message) => {
    message.read = false
    this.setState(this.state.messages)
  }

  selectedMessageCheckbox = () => {

    let numberSelected = this.state.messages.filter(message => {
      return message.selected
    }).length

    let action = ''

    if (numberSelected === this.state.messages.length) {
      action = '-check'
    } else if (numberSelected === 0) {
      action = ''
    } else {
      action = '-minus'
    }
    return action
  }


  // BULK SELECT BOX
  selectedIndicator = () => {
    let amountSelected = this.state.messages.filter(message => {
      return message.selected
    }).length

    let action = ''

    if (amountSelected === this.state.messages.length) {
      action = '-check'
    } else if (amountSelected === 0) {
      action = ''
    } else {
      action = '-minus'
    }
    return action
  }

  // FUNCTION to select/deselect all BULK SELECT BOX
  selectedIndicatorFunc = () => {
    //if all selected, uncheck all messages in Inbox
    // if clicked select all messages in Inbox
    let amountSelected = this.state.messages.filter( message => {
      return message.selected
    }).length

    if (amountSelected === this.state.messages.length) {
      this.setState({
        message: this.state.messages.map( message => {
          message.selected = false
          return message
        })
      })
    } else {
      this.setState({
        message: this.state.messages.map( message => {
          message.selected = true
          return message
        })
      })
    }
  }

  // markAsReadHandler = () => {
  //   //if message read = True
  //   let selectedMessages = this.state.messages.filter( message => { message.selected })
  //   console.log('selectedMessages>>>>', selectedMessages);
  //   this.setState( this.state.messages.concat( selectedMessages.map( message => {
  //     message.read = true
  //     return message
  //   })))
  // }

  // markAsUnread = () => {
  //   let selectedMessages = this.state.messages.filter( message => { message.selected })
  //   this.setState( this.state.messages.concat( selectedMessages.map( message => {
  //     message.read = false
  //     return message
  //   })))
  // }
  //
  // markAsReadHandler = () => {
  //   this.setState({ messages: this.state.messages.map(message => (message.selected ? { ...message, read: true } : message))
  //   })
  // }

  // markAsUnreadHandler = () => {
  //   let selectedMessages = this.state.messages.filter( message => { message.selected })
  //   this.setState( this.state.messages.concat( selectedMessages.map( message => {
  //     message.read = false
  //     return message
  //   })))
  // }

  markAsReadHandler = () => {
    this.setState({
      messages: this.state.messages.map(message => (
        message.selected ? { ...message, read: true } : message
      ))
    })
  }

  markAsUnreadHandler = () => {
    this.setState({
      messages: this.state.messages.map(message => (
        message.selected ? { ...message, read: false } : message
      ))
    })
  }


  disabledReadButton = () => {
    let selectedMessages = this.state.messages.filter( message => { message.selected })
    let readStatusArray = selectedMessages.map( message => {
      return message.read ? true : false
    })
    return readStatusArray.includes(true) || readStatusArray === 0 ? 'disabled' : ''
  }

  disableUnreadButton = () => {
    let selectedMessages = this.state.messages.filter( message => { message.selected })
    let readStatusArray = selectedMessages.map( message => {
      return message.read ? true : false
    })
    return readStatusArray.includes(false) || readStatusArray === 0 ? 'disabled' : ''
  }

  disabledMessageDeleteButton = () => {
    let selectedMessages = this.state.messages.filter( message => { message.selected })
    let readStatusArray = selectedMessages.map( message => {
      return message.selected ? true : false
    })
    return readStatusArray.includes(false) || readStatusArray === 0 ? 'disabled' : ''
  }

  deleteMessages() {
    const messages = this.state.messages.filter(message => !message.selected)
    this.setState({ messages })
  }

  // deleteMessage = () => {
  //   this.setState({
  //     messages: this.state.message.filter( message => {
  //       return !message.selected
  //     })
  //   })
  // }

  toggleCompose = () => {
    console.log('INSIDE toggleCompose');
    this.setState({composing: !this.state.composing })
  }


  render() {

    return (
      <div className="App">
        <Toolbar
          messages={this.state.messages}
          selectedIndicator={this.selectedIndicator}
          selectedIndicatorFunc={this.selectedIndicatorFunc}
          selectedMessageCheckbox={this.selectedMessageCheckbox}
          selectAllCheckbox={this.selectAllCheckbox}
          markAsReadHandler={this.markAsReadHandler}
          markAsUnreadHandler={this.markAsUnreadHandler}
          disabledReadButton={this.disabledReadButton}
          disableUnreadButton={this.disableUnreadButton}
          disabledMessageDeleteButton={this.disabledMessageDeleteButton}
          toggleCompose={this.toggleCompose}
        />

        <ComposeMessage
          composing={this.state.composing}
        />

        <MessageList
          messages={this.state.messages}
          toggleStarHandler={this.toggleStarHandler}
          userSelectMessage={this.userSelectMessage}
          userReadMessage={this.userReadMessage}
        />
      </div>
    );
    // messages is a prop that will be passed

  // close render()
  }

// close class App
}

export default App;
