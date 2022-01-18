import React from 'react'

import Header from '../../components/Header/index'
import TicketList from '../../containers/TicketsList/index'

const Tickets = () => {
    return (
        <div style={{width : '100%',marginLeft: '13%'}}>
            <Header />
            <TicketList />            
        </div>
    )
}

export default Tickets
