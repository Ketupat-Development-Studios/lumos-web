import React, { Component } from 'react'
import Toggle from 'react-toggle'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import "react-toggle/style.css"
import './index.css'

class Spell extends Component {
  constructor(){
    super()
    this.toggleSpell = this.toggleSpell.bind(this)
  }
  render(){
    const { spell } = this.props
    return (
      <div className="spell">
        <div className="row">
          <div className="spell-name">
            <h1>{spell.name}</h1>
          </div>
          <div className="spell-toggle">
            <Toggle
              defaultChecked={spell.activated}
              icons={false}
              onChange={this.toggleSpell} />
          </div>
        </div>
        <div className="trigger-row">
          <FontAwesomeIcon className="trigger-icon" icon="clock" />
          <span className="trigger-text">{JSON.stringify(spell.trigger)}</span>
        </div>
      </div>
    )
  }
  toggleSpell(){
    const { spell, onToggleSpell } = this.props
    onToggleSpell(spell.id)
  }
}

export default Spell