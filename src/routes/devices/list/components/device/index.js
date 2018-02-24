import React, { Component } from 'react'
import './index.css'

class Device extends Component {
	constructor(props) {
		super(props);
		const { device } = this.props;
		var checked = true;
		if (device.position === "off") {
			checked = false;
		}
		this.state = {checkboxState: checked};
	}

	toggle(event) {
		this.setState({checkboxState: !this.state.checkboxState});
		// POST action
		// send as application/json {device_id :: string, action :: string} action is one of {'on', 'off'}
		var action = this.state.checkboxState ? 'off' : 'on';
		const { device } = this.props
		console.log(device.id)
		fetch('https://lumos.ketupat.me/actions/', {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				device_id: device.id,
				action: action,
			})
		}).then(console.log)
	}



		/*
		var fileToSave = new XMLHttpRequest();
		fileToSave.open("POST", '/', true);
		fileToSave.setRequestHeader("Content-Type", 'text/plain');
		fileToSave.onreadystatechange = function() {
		if (fileToSave.readyState == XMLHttpRequest.DONE && fileToSave.status == 200) {
		// Request finished. Do processing here.
		alert("Frame " + curFile + " Saved!");
	}
}
fileToSave.send(bboxes);
*/

render(){
	const { device } = this.props
	var checked = true;
	if (device.position === "off") {
		checked = false;
	}
	return (
		<div className="device">
			<h3>{device.name}</h3>
			<input type="checkbox" defaultChecked={checked} onClick={this.toggle.bind(this)}/>
		</div>
	)
}
}

export default Device
