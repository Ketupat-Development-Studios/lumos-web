import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import NormalText from 'components/texts/NormalText'
import HeaderText from 'components/texts/HeaderText'
import PrimaryButton from 'components/buttons/PrimaryButton'
import { TRIGGER_TYPES } from 'models/Trigger'
import ClockConfig from './ClockConfig'
import './TriggerEdit.css'

class TriggerEdit extends Component{
  constructor(){
    super()
    this.render_configuration = this.render_configuration.bind(this)
    this.onTriggerChange = this.onTriggerChange.bind(this)
  }
  render(){
    const { trigger, onDelete } = this.props
    const configuration = this.render_configuration()
    return trigger.hasOwnProperty('type') ? (
      <div className="trigger-box">
        <div className="row title-row">
          <FontAwesomeIcon icon={trigger.icon} className="trigger-icon" />
          <HeaderText>{trigger.type}</HeaderText>
        </div>
        {configuration}
        <PrimaryButton text='REMOVE' onClick={onDelete} />
      </div>
    ) : (
      <div className="trigger-box">
        <NormalText>Select Trigger</NormalText>
      </div>
    )
  }
  render_configuration(){
    const { trigger } = this.props
    switch(trigger.type){
      case TRIGGER_TYPES.CLOCK:
        return (
          <ClockConfig
            trigger={trigger}
            onConfigChange={this.onTriggerChange}
          />
        )
      default:
        return null
    }
  }

  onTriggerChange(config){
    const { trigger, onTriggerChange } = this.props
    onTriggerChange({...trigger, ...config})
  }
}

export default TriggerEdit