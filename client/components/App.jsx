import React from 'react'
<<<<<<< HEAD

import CaptionList from './CaptionList'
import ImageCaption from './ImageCaption'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
=======
import {BrowserRouter as Router, Route} from 'react-router-dom'
>>>>>>> fcb52a01536675b3b465bc6074e0734417b1e6f8
import ImageContainer from './ImageContainer'

const App = () => (
  <Router>
    <div className='app'>
<<<<<<< HEAD
      <Route path='/images/:id/:captionid' component={ImageCaption} />
      <Route exact path='/images/:id' component={ImageContainer} />
=======
      <Route path="/images/:id" component={ImageContainer} />
>>>>>>> fcb52a01536675b3b465bc6074e0734417b1e6f8
    </div>
  </Router>
)

export default App
