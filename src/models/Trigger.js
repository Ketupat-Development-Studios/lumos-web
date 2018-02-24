
export const TRIGGER_TYPES = {
  CLOCK: 'clock'
}

export const CLOCK_SCHEDULES = {
  every_day: 'Every day',
  every_monday: 'Every Monday',
  every_tuesday: 'Every Tuesday',
  every_wednesday: 'Every Wednesday',
  every_thursday: 'Every Thursday',
  every_friday: 'Every Friday',
  every_saturday: 'Every Saturday',
  every_sunday: 'Every Sunday',
  once: 'Once',
}

export const CLOCK_TIMINGS = (() => {
  const quarterHours = ["00", "15", "30", "45"]
  let times = [];
  for(let i = 0; i < 24; i++){
    for(let j = 0; j < 4; j++){
      let time = i + ":" + quarterHours[j];
      if(i < 10){
        time = "0" + time;
      }
      times.push(time);
    }
  }
  return times
})()

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