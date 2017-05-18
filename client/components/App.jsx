import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Facestorm from './Facestorm'

const App = props => {
  return (
    <Router>
    <div>
    <Route path='/' exact={true} component={Home}/>
    <Route path='/Facestorm'  component={Facestorm}/>
    </div>
    </Router>
  )
}

export default App
