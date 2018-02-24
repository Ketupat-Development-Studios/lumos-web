import React from 'react'
import HeaderText from 'components/texts/HeaderText'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './index.css'

import Device from '../device'

const Area = ({ area, devices }) => (
  <div className="area">
    <div className="row area-info">
      <div className="area-icon-box">
        <FontAwesomeIcon icon={area.icon} color="#fff" />
      </div>
      <div className="area-label">
        <HeaderText>{area.name}</HeaderText>
      </div>
    </div>
    <div className="devices">
      {devices.filter(device=>device.area_id===area.id).map(device => <Device key={device.id} device={device} />)}
    </div>
  </div>
)

export default Area
