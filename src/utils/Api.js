import * as firebase from 'firebase'
import Constants from 'lib/Constants'

const firebaseApp = firebase.initializeApp(Constants.firebaseConfig)
const firebaseDb = firebaseApp.database()


class Api {
  static getAreas = async () => {
    let areas = null
    const snapshot = await firebaseDb.ref('areas/').once('value')
    areas = snapshot.val()
    return areas
  }
  static getDevices = () => new Promise((resolve) => {
    let devices = null
    //const snapshot = await firebaseDb.ref('devices/').once('value')
    //https://lumos.ketupat.me/devices/ ; https://api.github.com/
    fetch('https://lumos.ketupat.me/devices/')
                      .then(response => response.json())
                      .then(responseJson => {
                        resolve(responseJson)
                      })
                      .catch(console.error)
    //let data = await snapshot.json()


    //devices = snapshot.val()
    return devices
  })
  static getDevicesByArea = async (areaId) => {
    let devices = null
    const snapshot = await firebaseDb.ref(`/devices/${areaId}/`).once('value')
    devices = snapshot.val()
    return devices
  }
  static toggleSwitch (switchId) {
    // TO-DO
  }
}

export default Api
