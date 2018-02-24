import React, { Component } from 'react'
import Toggle from 'react-toggle'
import Api from 'utils/Api'
import NormalText from 'components/texts/NormalText'
import './index.css'

class Device extends Component {
	constructor(props) {
		super(props)
		this.toggleDeviceState = this.toggleDeviceState.bind(this)
	}

	toggleDeviceState(event) {
		const { device, toggleDeviceState } = this.props
		toggleDeviceState(device.id)
	}

	render(){
		const { device, onClick } = this.props
		const checkbox = device.position === 'on'
		return (
			<div className="device">
				<NormalText onClick={onClick}>{device.name}</NormalText>
				<Toggle
					checked={checkbox}
					icons={false}
					onChange={this.toggleDeviceState} 
				/>
			</div>
		)
	}
}

export default Device
