import React, { Component } from 'react'
import './index.css'

class Device extends Component {
  render(){
    const { device } = this.props
    return (
      <div className="device">
        <h2>{device.name}</h2>
        <input type="checkbox" checked={device.value}/>
      </div>
    )
  }
}

export default Device