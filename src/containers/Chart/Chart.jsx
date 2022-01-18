import React from 'react'

import OverviewCard from '../../components/OverviewCard/index'

import GraphImg from '../../assets/icons/graph.png'
import './Chart.scss'


class Chart extends React.Component {

  render() {

    return (
      <div className="Chart">
        <div className="todays-chart">
          <div className="daily-top">
            <div className="date">
              <h3>Today’s trends</h3>
              <p>as of 25 May 2019, 09:41 PM</p>
            </div>
            <div className="graph-guide">
              <p className="today">Today</p>
              <p className="yesterday">Yesterday</p>
            </div>
          </div>
          <img src={GraphImg} alt="" className="graph-img" />
        </div>
        <div className="daily-overview">
          <OverviewCard title="Resolved" number="449" />
          <OverviewCard title="Received" number="426" />
          <OverviewCard title="Average first response time" number="33m" />
          <OverviewCard title="Average response time" number="3h 8m" />
          <OverviewCard title="Resolution within SLA" number="94%" />
        </div>
      </div>
    );
  }
}

export default Chart
