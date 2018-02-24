import React, { Component } from 'react'
import './index.css'

class Device extends Component {
  render(){
    const { device } = this.props
    return (
      <div className="device">
        <h3>{device.name}</h3>
        <input type="checkbox" checked={device.value}/>
      </div>
    )
  }
}

export default Device
