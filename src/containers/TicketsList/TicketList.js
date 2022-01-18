import React from 'react'

import { 
    FilterIcon,
    SortIcon,
    ArrowLeft,
    ArrowRight
} from '../../assets/icons/icons'

import Button from '../../components/Button/index'
import './ticketlist.scss'
import Ticket from '../../components/Ticket/index'

import {
    userData
 } from './usr-db'
class TicketList extends React.Component{
    render() {
          return (
            <div className="tickets-list">
              <div className="ticket-header">
                <h2 className="ticket-header_title">All tickets</h2>
                <div className="ticket-header_sort">
                  <Button
                    title="Filter"
                    icon={<FilterIcon />}
                    btnClass="sort-icon"
                  />
                  <Button
                    title="Filter"
                    icon={<SortIcon />}
                    btnClass="sort-icon"
                  />
                </div>
              </div>
              <div className="ticket-heading">
                <h3 className="text-muted detail">Ticket details</h3>
                <h3 className="text-muted name">Customer name</h3>
                <h3 className="text-muted date">Date</h3>
                <h3 className="text-muted priority">Priority</h3>
              </div>
              {userData.map((item) => (
                <Ticket
                  avatar={item.avatar}
                  subject={item.subject}
                  subjectDate={item.subjectDate}
                  activity={item.activity}
                  fname={item.fname}
                  date={item.date}
                  time={item.time}
                  priority={item.priority}
                  level={item.level}
                />
              ))}
              <div className="ticket-footer">
                <label htmlFor="pageSort" className="select-label footer-text">
                  Rows per page:
                </label>
                <select
                  name="pageSort"
                  id="pageSort"
                  className="select-control footer-text"
                >
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                </select>

                <div className="pagination-info">
                  <p className="current-page footer-text">1-8 of 1240</p>
                  <Button icon={<ArrowLeft />} btnClass="footer-btn" />
                  <Button icon={<ArrowRight />} btnClass="footer-btn" />
                </div>
              </div>
            </div>
          );
    }
}

export default TicketList
