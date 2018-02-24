import React, { Component } from 'react'
import HeaderText from 'components/texts/HeaderText'
import IconBox from 'components/icons/IconBox'
import './index.css'

import Device from '../device'

class Area extends Component {
  constructor(){
    super()
    this.openAreaDetail = this.openAreaDetail.bind(this)
  }
  render(){
    const { area, devices, toggleDeviceState } = this.props
    return (
      <div className="area">
        <div className="row area-info" onClick={this.openAreaDetail}>
          <IconBox icon={area.icon} />
          <div className="area-label">
            <HeaderText>{area.name}</HeaderText>
          </div>
        </div>
        <div className="devices">
          {
            devices
              .filter(device=>device.area_id===area.id)
              .map(device => (
                <Device 
                  key={device.id}
                  device={device}
                  onClick={this.openAreaDetail}
                  toggleDeviceState={toggleDeviceState}
                />)
              )
          }
        </div>
      </div>
    )
  }

  openAreaDetail() {
    const { area, onClick } = this.props
    onClick(area.id)
  }
}

export default Area
