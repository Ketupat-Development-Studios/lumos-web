class Action {
  constructor(actionData){
    if(actionData){
      this.id = actionData.id
      this.device_id = actionData.device_id
      this.position = actionData.position
      this.human_readable = this.to_human_readable()
    }
  }
  to_human_readable(){
    return `Set device_${this.device_id} to "${this.position}"`
  }
}

export default Action