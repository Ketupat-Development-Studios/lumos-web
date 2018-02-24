import React, { Component } from 'react'
import Toggle from 'react-toggle'
import Api from 'utils/Api'
import NormalText from 'components/texts/NormalText'
import './index.css'

class Device extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checkbox: props.device.position === 'off'
		}
		this.toggleDeviceState = this.toggleDeviceState.bind(this)
	}

	toggleDeviceState(event) {
		const action = this.state.checkbox ? 'off' : 'on';
		const { device } = this.props
		Api.setDevicePosition(device.id, action)
			.then(device => {
				console.log(device)
			})
			.catch(error => {
				alert(error)
			})
	}

	render(){
		const { device } = this.props
		const { checkbox } = this.state
		return (
			<div className="device">
				<NormalText>{device.name}</NormalText>
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
