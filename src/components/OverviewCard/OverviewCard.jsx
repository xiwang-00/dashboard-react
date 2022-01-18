import React from 'react'

import './overCard.scss'
class OverviewCard extends React.Component {
    render () {
            return (
              <div className="overview-card">
                <h4 className="title">{this.props.title}</h4>
                <h2 className="number">{this.props.number}</h2>
              </div>
            );
    }
}
export default OverviewCard
