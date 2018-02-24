import React, { Component } from 'react'
import NormalText from 'components/texts/NormalText'
import PrimaryButton from 'components/buttons/PrimaryButton'
import MultipleChoice from 'components/inputs/MultipleChoice'
import './ActionEdit.css'

class ActionEdit extends Component {
  constructor(){
    super()
    this.handlePositionChange = this.handlePositionChange.bind(this)
  }

  render(){
    const { action } = this.props
    return (
      <div className="action-edit">
        <NormalText>Device #{action.device_id}</NormalText>
        <div className="row">
          <PrimaryButton
            text='DELETE'
          />
          <MultipleChoice
            options={[
              { value: 'on', text: 'ON' },
              { value: 'off', text: 'OFF'},
              { value: 'toggle', text: 'TOGGLE'}
            ]}
            value={action.position}
            onChange={this.handlePositionChange}
          />
        </div>
      </div>
    )
  }
  handlePositionChange = (event) => {
    const { onPositionChange, action } = this.props
    console.log(action.id, event)
    onPositionChange(action.id, event.target.value)
  }
}

export default ActionEdit