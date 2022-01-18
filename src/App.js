import React from 'react'

import Tickets from './pages/Tickets/Tickets'
import Sidebar from './containers/Sidebar/Sidebar'
import Overview from './pages/Overview/index'
import { Switch, Route } from 'react-router-dom' 

 class App extends React.Component {
  render() {
     return ( 
      <div className = "App"
          style = {{display: 'flex',}} >
        <Sidebar / > 
        <Switch>
            <Route path="/overview" component={Overview} />
            <Route path = "/tickets" component={Tickets} />
        </Switch>
      </div>
    );
  }
}

  export default App;