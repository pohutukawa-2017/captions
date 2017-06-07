import React, {Component} from 'react'
import ImageThumbnail from '../components/ImageThumbnail'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class ImageList extends Component {

  createListImage () {
    return this.props.images.map((image, key) => {
      return (
        <div key={key} className='image-container'>
          <Route path='/image/:id' component={ImageThumbnail} id={this.props.images.id} imgUrl={this.props.images.path} />
        </div>
      )
    })
  }

  render () {
    return (
      <Router>
        <div className='listings-container'>
          {this.createListImage()}
        </div>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ImageList)
