import React from 'react'
import CaptionList from './CaptionList'
import ImageCaption from './ImageCaption'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <Router>
    <div className='app'>
      <Route path='/images/:id/:id' component={ImageCaption} />
    </div>
  </Router>
)

export default App
