import React from 'react'

import { DottIcon } from '../../assets/icons/icons'
import Button from '../Button/index'
import './Ticket.scss'


class Ticket extends React.Component {
  render() {
    return (
      <div className="ticket-item">
        <div className="col">
          <img src={this.props.avatar} alt="" className="user-img" />
          <div className="user-info">
            <h3 className="subject">{this.props.subject}</h3>
            <h4 className="subject-date">{this.props.subjectDate}</h4>
          </div>
        </div>
        <div className="col col-sm">
          <h3 className="customerName">{this.props.fname}</h3>
          <h4 className="activity">{this.props.activity}</h4>
        </div>
        <div className="col col-sm">
          <h3 className="date">{this.props.date}</h3>
          <h4 className="time">{this.props.time}</h4>
        </div>
        <div className="col col-sm">
          <span className={`priority ${this.props.priority}`}>
            {this.props.priority}
          </span>
          <Button icon={<DottIcon />} btnClass="dots" />
        </div>
      </div>
    );
  }
}
export default Ticket