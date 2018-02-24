
const TRIGGER_TYPES = {
  CLOCK: 'clock'
}

const TRIGGER_ICONS = {
  clock: "clock"
}

class Trigger {
  constructor(triggerData){
    if(triggerData){
      if(triggerData.hasOwnProperty('type')){
        this.type = triggerData.type
        this.icon = TRIGGER_ICONS[this.type]
        this.handle_trigger_type(triggerData)
      }
    }
  }
  handle_trigger_type(data){
    switch(this.type){
      case TRIGGER_TYPES.CLOCK:
        this.minute = data.minute
        this.schedule = data.schedule
        this.time = data.time
        this.human_readable = Trigger.human_readable_clock({
          schedule: this.schedule,
          time: this.time,
          minute: this.minute
        })
        break
      default:
        break
    }
  }

  static human_readable_clock({ schedule, time, minute }){
    return `${schedule} at ${time}`
  }
}

export default Trigger