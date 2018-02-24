import React, { Component } from 'react'
import Api from 'utils/Api'
import AddHeader from 'components/headers/AddHeader'
import Area from './components/area'
import './index.css'

class DeviceScreen extends Component {
  constructor(){
    super()
    this.state = {
      areas: [],
      devices: [],
    }
    this.handleAddDevice = this.handleAddDevice.bind(this)
  }
  async componentWillMount() {
    const areas = await Api.getAreas()
    const devices = await Api.getDevices()
    this.setState({ areas, devices })
  }
  render(){
    const { areas, devices } = this.state
    return (
      <div>
        <AddHeader
          title='Devices'
          onClick={this.handleAddDevice}
        />
        <div className="device-screen">
          
          <div className="container">
            {
              areas.map(area => (
                <Area key={area.id} area={area} devices={devices} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
  handleAddDevice(){
    // direct to add device page
  }
}

export default DeviceScreen
