import React from "react";

import "./TicketStats.scss";

class CardList extends React.Component {
  render() {
    return (
      <div className="list-item">
        <h3 className="list-name">{this.props.title}</h3>
        <p className="num">{this.props.num}</p>
      </div>
    );
  }
}

class TicketStats extends React.Component {
  render() {
    return (
      <div className="ticket-stats-card">
        <div className="card-top">
          <h3 className="card-title">
            Unresolved tickets
            <p className="card-subtitle">
              Group: <span>Support</span>
            </p>
          </h3>
          <p className="link">View details</p>
        </div>
        <CardList title="Waiting on Feature Request" num="4238" />
        <CardList title="Awaiting Customer Response" num="1005" />
        <CardList title="Awaiting Developer Fix" num="914" />
        <CardList title="Pending" num="281" />
      </div>
    );
  }
}
export default TicketStats;
