import React, { Component } from 'react'
import LoadingHeader from 'components/headers/LoadingHeader'
import TextInput from 'components/inputs/TextInput'
import HeaderText from 'components/texts/HeaderText'
import TriggerEdit from './components/TriggerEdit'
import ActionEdit from './components/ActionEdit'
import Api from 'utils/Api'
import Trigger from 'models/Trigger'
import Action from 'models/Action'
import './index.css'

class SpellDetailScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      spellId: props.match.params.spell_id,
      spell: {
        name: ''
      }
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.deleteTrigger = this.deleteTrigger.bind(this)
    this.handlePositionChange = this.handlePositionChange.bind(this)
  }
  componentDidMount(){
    const { spellId } = this.state
    Api.getSpellById(spellId)
      .then(spell => {
        this.setState({ spell })
      })
      .catch(console.error)
  }
  render(){
    const { isLoading, spell } = this.state
    return (
      <div className="spell-detail-screen">
        <LoadingHeader
          text='Saved'
          loadingText='Saving...'
          isLoading={isLoading}
        />
        <div className="spell-detail">
          <TextInput value={spell.name} placeholder="Spell Name" onChange={this.handleChangeName} />
          <div className="trigger-section">
            <HeaderText>Trigger</HeaderText>
            <TriggerEdit
              trigger={(new Trigger(spell.trigger))}
              onDelete={this.deleteTrigger}
            />
          </div>
          <div className="action-section">
            <HeaderText>Actions</HeaderText>
            {
              spell.actions ? (
                <div className="action-container">
                  {
                    Object.values(spell.actions).map(actionData => (
                      <ActionEdit
                        key={actionData.id}
                        action={(new Action(actionData))}
                        onPositionChange={this.handlePositionChange}
                      />
                    ))
                  }
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    )
  }
  handleChangeName(event){
    const { spell } = this.state
    this.setState({ spell: {...spell, name: event.target.value}})
  }
  deleteTrigger(){
    const { spell_id } = this.state
    Api.deleteSpellTrigger(spell_id)
      .then(spell => {
        this.setState({ spell })
      })
      .catch(console.error)
  }
  handlePositionChange(actionId, position){
    const { spell } = this.state
    const action = { ...spell.actions[actionId], position }
    Api.updateSpellAction(spell.id, action)
      .then(spell => {
        this.setState({ spell })
      })
      .catch(console.error)
  }
}

export default SpellDetailScreen