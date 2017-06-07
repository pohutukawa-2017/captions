import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ImageContainer from './ImageContainer'

const App = () => (
  <Router>
    <div className='app'>
    <Link to ="/images/1"><h1>1</h1></Link>
    <Link to ="/images/2"><h1>2</h1></Link>
    <Link to ="/images/3"><h1>3</h1></Link>
    <Route path="/images/:id" component={ImageContainer} />
    </div>
  </Router>
)

export default App
