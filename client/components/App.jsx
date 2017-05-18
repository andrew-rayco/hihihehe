import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'

const App = props => {
  const circle = {
    cx: props.width / 2,
    cy: props.height / 2,
    level: 0,
    r: 256
  }

  return (
    <Router>
    <div>
    <Route path='/' component={Home}/>
    <svg width={props.width} height={props.height}>
      <circle cx={circle.cx} cy={circle.cy} r={circle.r} />
    </svg>
    </div>
    </Router>
  )
}

export default App
