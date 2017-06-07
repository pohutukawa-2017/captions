import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ImageContainer from './ImageContainer'

import Login from './Login'

const App = () => (

  <Router>
    <div className='app'>
      <Route path='/images/:id' component={ImageContainer} />
      <Route path='/login' component={Login} />
    </div>
  </Router>
)

export default App
