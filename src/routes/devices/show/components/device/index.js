import React, { Component } from 'react'
import Toggle from 'react-toggle'
import TextInput from 'components/inputs/TextInput'
import PrimaryButton from 'components/buttons/PrimaryButton'
import './index.css'

class Device extends Component {
  constructor(){
    super()
    this.onChangeName = this.onChangeName.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onTogglePosition = this.onTogglePosition.bind(this)
  }
  render(){
    const { device } = this.props
    const checkbox = device.position === 'off'
    return (
      <div className="device-box">
        <TextInput
          value={device.name}
          onChange={this.onChangeName}
        />
        <div className="row device-buttons">
          <PrimaryButton
            text='DELETE'
            onClick={this.onDelete}
          />
          <Toggle
            checked={checkbox}
            icons={false}
            onChange={this.onTogglePosition} 
          />
        </div>
      </div>
    )
  }
  onChangeName(event){
    const { onChangeName, device } = this.props
    onChangeName(device.id, event.target.value)
  }
  onDelete(){
    const { device, onDelete } = this.props
    onDelete(device.id)
  }
  onTogglePosition(){
    const { onTogglePosition, device } = this.props
    onTogglePosition(device.id)
  }
}

export default Device