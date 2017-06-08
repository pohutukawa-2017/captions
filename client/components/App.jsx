import React from 'react'
import ImageCaption from './ImageCaption'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ImageContainer from './ImageContainer'

import Login from './Login'
import Register from './Register'

const App = () => (

  <Router>
    <div className='app'>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/images/:id/:captionid' component={ImageCaption} />
      <Route exact path='/images/:id' component={ImageContainer} />
    </div>
  </Router>
)

export default App
