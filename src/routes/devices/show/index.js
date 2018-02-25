import React, { Component } from 'react'
import IconBox from 'components/icons/IconBox'
import TextInput from 'components/inputs/TextInput'
import LoadingHeader from 'components/headers/LoadingHeader'
import Api from 'utils/Api'
import Device from './components/device'
import './index.css'

class DeviceDetailScreen extends Component {
  constructor(){
    super()
    this.state = {
      devices: [],
      area: {
        name: "",
      },
      isLoading: false
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleDeviceChangeName = this.handleDeviceChangeName.bind(this)
    this.handleDeviceDelete = this.handleDeviceDelete.bind(this)
    this.handleDeviceTogglePosition = this.handleDeviceTogglePosition.bind(this)
  }
  componentWillMount(){
    this.fetchData()
  }
  fetchData(){
    const { areaId } = this.props.match.params
    this.setState({ isLoading: true })
    Promise.all([
      Api.getAreaById(areaId),
      Api.getDevices()
    ]).then(result => {
      const area = result[0]
      const devices = result[1].filter(d => `${d.area_id}` === areaId)
      this.setState({ area, devices, isLoading: false })
    }).catch(err => alert(err))
  }
  render(){
    const { area, devices, isLoading } = this.state
    return (
      <div>
        <LoadingHeader
          isLoading={isLoading}
          text='Saved'
          loadingText='Saving...'
        />
        <div className="device-detail-screen">
          <div className="area row">
            <IconBox icon={area.icon} />
            <div className="device-input">
              <TextInput
                value={area.name}
                placeholder="Area Name"
                onChange={this.handleChangeName}
              />
            </div>
          </div>
          <div className="devices">
            {
              devices ? (
                devices.map(device => (
                  <Device
                    key={device.id}
                    device={device}
                    onChangeName={this.handleDeviceChangeName}
                    onDelete={this.handleDeviceDelete}
                    onTogglePosition={this.handleDeviceTogglePosition}
                  />
                ))
              ): null
            }
          </div>
        </div>
      </div>
    )
  }

  handleChangeName(e){
    const { area } = this.state
    const name = e.target.value
    this.setState({ area: {
      ...area,
      name
    }, isLoading: true})
    Api.updateArea(area.id, name)
      .then(() => {
         this.setState({isLoading: false})
      })
      .catch(err => alert(err))
  }

  handleDeviceChangeName(deviceId, name){
    const { devices } = this.state
    const device = devices.filter(d => d.id === deviceId)[0]
    device.name = name
    this.setState({ devices, isLoading: true })
    Api.updateDevice(deviceId, name)
      .then(() => {
        this.setState({
          isLoading: false
        })
      })
      .catch(err => alert(err))
  }

  handleDeviceDelete(deviceId){
    const devices = devices.filter(d => d.id !== deviceId)
    this.setState({ devices, isLoading: true })
    Api.deleteDevice(deviceId)
      .then(() => {
        this.setState({ isLoading: false })
      })
      .catch(err => alert(err))
  }

  handleDeviceTogglePosition(deviceId){
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

export default DeviceDetailScreen