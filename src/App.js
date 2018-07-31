import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'

class App extends Component {
  state = {
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  // write functions here
  toggleStarHandler = (message) => {
    //onClick change display if on => off
    console.log('here in toggle star', message); // id of clicked star
    console.log('messages', this.state.messages); // all 8 messages
    console.log('message.starred', message.starred); //true

    message.starred = !message.starred
    this.setState(this.state.messages)
    // this.setState({message.starred: !message.starred})
    console.log('message.starred after switch', message.starred); //true
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
    console.log('numberSelected', numberSelected);

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
    console.log('in selectedIndicator function');
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

  // deleteMessages() {
  //   const messages = this.state.messages.filter(message => !message.selected)
  //   this.setState({ messages })
  // }

  deleteMessage = () => {
    this.setState({
      messages: this.state.message.filter( message => {
        return !message.selected
      })
    })
  }

  async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/people')
  const json = await response.json()
  this.setState({people: json})
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
