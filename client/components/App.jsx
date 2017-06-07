import React from 'react'
import ImageCaption from './ImageCaption'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ImageContainer from './ImageContainer'

const App = () => (
  <Router>
    <div className='app'>
      <Route path='/images/:id/:captionid' component={ImageCaption} />
      <Route exact path='/images/:id' component={ImageContainer} />
    </div>
  </Router>
)

export default App
