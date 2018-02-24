import React from 'react'
import './index.css'

import Device from '../device'

const Area = ({ area, devices }) => (
  <div className="area">
    <div className="area-info">
      <h2>{area.name}</h2>
    </div>
    <div className="devices">
      {devices.filter(device=>device.area_id===area.id).map(device => <Device key={device.id} device={device} />)}
    </div>
  </div>
)

export default Area
