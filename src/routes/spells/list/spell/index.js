import React, { Component } from 'react'
import Toggle from 'react-toggle'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import TitleText from 'components/texts/TitleText'
import NormalText from 'components/texts/NormalText'
import Action from './Action'
import "react-toggle/style.css"
import './index.css'

class Spell extends Component {
  constructor(){
    super()
    this.toggleSpell = this.toggleSpell.bind(this)
    this.viewDetail = this.viewDetail.bind(this)
  }
  render(){
    const { spell, onClick } = this.props
    return (
      <div className="spell" onClick={this.viewDetail}>
        <div className="row">
          <div className="spell-name">
            <TitleText>{spell.name}</TitleText>
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
          <NormalText className="trigger-text">{spell.trigger.human_readable}</NormalText>
        </div>
        <div className="actions">
          {
            spell.actions ? spell.actions.map(action => <Action key={action.id} action={action} /> ) : null
          }
        </div>
      </div>
    )
  }
  toggleSpell(){
    const { spell, onToggleSpell } = this.props
    onToggleSpell(spell.id)
  }
  viewDetail(){
    const { spell, onClick } = this.props
    onClick(spell.id)
  }
}

export default Spell