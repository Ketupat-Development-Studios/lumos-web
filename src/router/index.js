import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import DevicesScreen from 'routes/devices/list'
import SpellsScreen from 'routes/spells/list'
import SettingsScreen from 'routes/settings'

const RootRouter = () => (
  <Router>
    <div>
      <div className="navigation-bar">
        <ul>
          <li><Link to="/">Devices</Link></li>
          <li><Link to="/spells">Spells</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>

      <hr/>
      <div className="app-container">
        <Route exact path="/" component={DevicesScreen}/>
        <Route path="/spells" component={SpellsScreen}/>
        <Route path="/settings" component={SettingsScreen}/>
      </div>
    </div>
  </Router>
)

export default RootRouter