import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ImageContainer from './ImageContainer'

const App = () => (
  <Router>
    <div className='app'>
      <Route path="/images/:id" component={ImageContainer} />
    </div>
  </Router>
)

export default App
