import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar'
import ImageList from './imageList'
import AddCaptionContainer from './AddCaptionContainer'
import ImageCaption from './ImageCaption'
import ImageContainer from './ImageContainer'
import Login from './Login'
import Register from './Register'
import ProfilePage from './ProfilePage'

const App = () => (

  <Router>
    <div className='app'>
      <Navbar />
      <Route exact path='/' component={ImageList} />
      <Switch>
        <Route exact path='/images/:id' component={ImageContainer} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile/:id' component={ProfilePage} />
        <Route path='/images/:id/add-caption' component={AddCaptionContainer} />
        <Route path='/images/:id/:captionid' component={ImageCaption} />
      </Switch>
    </div>
  </Router>
)

export default App
