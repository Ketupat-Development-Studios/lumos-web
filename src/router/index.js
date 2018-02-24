import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css'

import DevicesScreen from 'routes/devices/list'
import DeviceDetailScreen from 'routes/devices/show'
import SpellsScreen from 'routes/spells/list'
import SpellDetailScreen from 'routes/spells/show'
import SettingsScreen from 'routes/settings'
import TriggersScreen from 'routes/triggers/list'

const RootRouter = () => (
  <Router>
    <div className="app-screen">
      <div className="app-container">
        <Route exact path="/" component={DevicesScreen}/>
        <Route path="/areas/:areaId" component={DeviceDetailScreen} />
        <Route exact path="/spells" component={SpellsScreen}/>
        <Route path="/spells/:spell_id" component={SpellDetailScreen} />
        <Route exact path="/triggers" component={TriggersScreen} />
        <Route exact path="/settings" component={SettingsScreen}/>
      </div>
      <div className="navigation-bar">
          <Link to="/">Devices</Link>
          <Link to="/spells">Spells</Link>
          <Link to="/settings">Settings</Link>
      </div>
    </div>
  </Router>
)

export default RootRouter
