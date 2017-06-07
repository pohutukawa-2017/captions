import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ImageContainer from './ImageContainer'
import AddCaptionContainer from './AddCaptionContainer'

const App = () => (
  <Router>
    <div className='app'>
      <Route exact path="/images/:id" component={ImageContainer} />
      <Route path="/images/:id/add-caption" component={AddCaptionContainer} />
    </div>
  </Router>
)

export default App
