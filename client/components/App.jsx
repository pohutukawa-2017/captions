import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <Router>
    <div className='app'>
    <h1>Hello World</h1>
    <Route path="/images/:id" component={CaptionList} />
    </div>
  </Router>
)

export default App
