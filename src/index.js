import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import FontAwesome from 'lib/FontAwesome'

FontAwesome()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
