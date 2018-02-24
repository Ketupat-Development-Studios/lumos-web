import React, { Component } from 'react'
import './index.css'

class Device extends Component {
  constructor(props) {
    super(props);
    const { device } = this.props
    this.state = {checkboxState: device.value};
  }

  toggle(event) {
   this.setState({checkboxState: !this.state.checkboxState});
   
   // POST action
   // send as application/json {device_id :: string, action :: string} action is one of {'on', 'off'}
  }

  render(){
    const { device } = this.props
    return (
      <div className="device">
        <h3>{device.name}</h3>
        <input type="checkbox" defaultChecked={device.value} onClick={this.toggle.bind(this)}/>
      </div>
    )
  }
}

export default Device
