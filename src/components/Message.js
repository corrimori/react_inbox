import React from 'react'

const Message = ({ message, toggleStarHandler, userSelectMessage, userReadMessage }) => {
  let labelList = message.labels.map( (label, index) => {
    return (
      <span key={index} className="label label-warning">{ label }</span>
    )
  })

  return (
    <div className={`row message ${message.read ? 'read': 'unread'} ${message.selected ? 'selected': ''}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input
              type="checkbox"
              checked={ message.selected }
              onChange={ () => userSelectMessage(message)} />
          </div>
          <div className="col-xs-2">
            <i className={`star fa fa-star${ message.starred ? '': '-o'}`}
               onClick={ () => toggleStarHandler(message)}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11"
        onClick={ () => userReadMessage(message)} >
        {labelList}
        <a href="#">
          {message.subject}
        </a>
      </div>
    </div>
  )
              // <i className={`star fa fa-star${ message.starred ? '': '-o'}`}
  // <p onClick={props.click}>I am a {props.name} and I am {props.age} years old!</p>
  // <p>{props.children}</p>
  // <input type="text" onChange={props.changed} value={props.name}/>
}


export default Message
