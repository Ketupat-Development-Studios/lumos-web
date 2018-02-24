import React, { Component } from 'react'
import Api from 'utils/Api'
import Area from './components/area'
import './index.css'

class DeviceScreen extends Component {
  constructor(){
    super()
    this.state = {
      areas: [],
      devices: [],
    }
  }
  async componentWillMount() {
    const areas = await Api.getAreas()
    const devices = await Api.getDevices()
    console.log(areas)
    console.log(devices)
    this.setState({ areas, devices })
  }
  render(){
    const { areas, devices } = this.state
    return (
      <div className="device-screen">
	  <div className="device-header">
        <h1>Devices</h1>
		<img src="add.png" width="20%" height="20%" alt="addDevice" onClick={this.myfunction}/>
		</div>
        {
          areas.map(area => (
            <Area key={area.id} area={area} devices={devices} />
          ))
        }
      </div>
    )
  }
}

export default DeviceScreen
