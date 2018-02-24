import React, { Component } from 'react'
import MultipleChoice from 'components/inputs/MultipleChoice'
import { CLOCK_SCHEDULES, CLOCK_TIMINGS } from 'models/Trigger'

class ClockConfig extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: props.trigger.time,
      schedule: props.trigger.schedule
    }
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleScheduleChange = this.handleScheduleChange.bind(this)
    this.onConfigChange = this.onConfigChange.bind(this)
  }
  render(){
    const { time, schedule } = this.state
    return (
      <div className="configuration">
        <MultipleChoice
          className="schedule-picker"
          value={schedule}
          onChange={this.handleScheduleChange}
          options={Object.entries(CLOCK_SCHEDULES).map(e => ({value: e[0], text: e[1]}))}
        />
        <MultipleChoice
          className="time-picker"
          value={time}
          onChange={this.handleTimeChange}
          options={CLOCK_TIMINGS.map(t => ({value:t, text:`${t.substr(0, 2)}:${t.substr(2)}`}))}
        />
      </div>
    )
  }
  handleTimeChange(event){
    this.setState({ time: event.target.value }, this.onConfigChange)
  }
  handleScheduleChange(event){
    this.setState({ schedule: event.target.value }, this.onConfigChange)
  }
  onConfigChange(){
    const { time, schedule } = this.state
    const { onConfigChange } = this.props
    onConfigChange({ time, schedule })
  }
}

export default ClockConfig