import React from 'react';

import Header from '../../components/Header/index';
import OverviewCard from '../../components/OverviewCard/index';
import Chart from '../../containers/Chart/index'
import TicketStats from '../../components/TicketStats/index'

import './Overview.scss'

class Overview extends React.Component{

    render() {
                return (
                  <div style={{ width: "100%", marginLeft: "13%" }}>
                    <Header />
                    <div className="overview-top">
                      <OverviewCard title="Unresolved" number="60" />
                      <OverviewCard title="Overdue" number="16" />
                      <OverviewCard title="Open" number="43" />
                      <OverviewCard title="On hold" number="64" />
                    </div>
                    <Chart />
                    <div className="ticket-stats-wrapper">
                      <TicketStats />
                      <TicketStats />
                    </div>
                  </div>
                );

    }
}
export default Overview
