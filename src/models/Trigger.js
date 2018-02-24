const TRIGGER_TYPES = {
  CLOCK: 'clock'
}

class Trigger {
  constructor(triggerData){
    if(triggerData){
      this.type = triggerData.type
      handle_trigger_type(triggerData)
    }
  }
  handle_trigger_type(data){
    switch(this.type){
      case TRIGGER_TYPES.CLOCK:
        this.minute = data.minute
        this.schedule = data.schedule
        this.time = data.time
        return
    }
  }
}