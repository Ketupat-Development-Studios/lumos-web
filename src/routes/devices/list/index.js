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
      isLoading: false
    }
    this.handleAddDevice = this.handleAddDevice.bind(this)
    this.openAreaDetail = this.openAreaDetail.bind(this)
    this.handleToggleDevice = this.handleToggleDevice.bind(this)
  }
  async componentWillMount() {
    await this.fetchData()
  }
  async fetchData(){
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
                <Area
                  key={area.id}
                  area={area}
                  devices={devices}
                  onClick={this.openAreaDetail}
                  toggleDeviceState={this.handleToggleDevice}
                />
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
  openAreaDetail(areaId){
    window.location.href = `/areas/${areaId}`
  }
  handleToggleDevice(deviceId){
    const { devices } = this.state
    const device = devices.filter(d => d.id === deviceId)[0]
    device.position = device.position === 'on' ? 'off' : 'on'
    this.setState({ isLoading: true })
    Api.setDevicePosition(deviceId, device.position)
      .then(() => {
        this.setState({ isLoading: false })
      })
      .catch(err => {
        this.fetchData()
        alert(err)
      })
  }
}

export default DeviceScreen
