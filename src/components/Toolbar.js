import React, { Component } from 'react';
// import Message from './Message'

class Toolbar extends Component {

  render() {
    let unReadMessage = this.props.messages.filter( message => !message.read ).length

    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{unReadMessage}</span>
            unread messages
          </p>

          <a className="btn btn-danger"
            onClick={() => this.props.toggleCompose()}>
            <i className="fa fa-plus"></i>
          </a>

          {/*  COMMENT LINE  */}
          {console.log('this.props>>>', this.props)}

          <button className="btn btn-default">
            <i onClick={() => this.props.selectedIndicatorFunc()}
               className={`fa fa${this.props.selectedIndicator()}-square-o`}></i>
          </button>

          <button
              className="btn btn-default"
              onClick={() => this.props.markAsReadHandler()}
          >Mark As Read
          </button>

          <button
              className="btn btn-default"
              onClick={() => this.props.markAsUnreadHandler()}
          >Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button
              className="btn btn-default"
              disabled={`${ this.props.disabledMessageDeleteButton() }`}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar

// <i className={`fa fa-${ this.props.selectedMessageCheckbox() }-square-o`}></i>
