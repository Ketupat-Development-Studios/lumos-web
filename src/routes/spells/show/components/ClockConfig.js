import React, { Component } from 'react'
import MultipleChoice from 'components/inputs/MultipleChoice'
import { CLOCK_SCHEDULES, CLOCK_TIMINGS } from 'models/Trigger'

class ClockConfig extends Component {
  constructor(){
    super()
    this.state = {
      time: null,
      schedule: null
    }
    this.handleTimeChange = this.handleTimeChange.bind(this)
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
          options={CLOCK_TIMINGS}
        />
      </div>
    )
  }
  handleTimeChange(event){
    this.setState({ time: event.target.value })
  }
  handleScheduleChange(event){
    this.setState({ schedule: event.target.value })
  }
}

export default ClockConfig