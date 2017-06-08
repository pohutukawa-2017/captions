import React from 'react'
import {connect} from 'react-redux'

import {getImageById} from '../api'
import {imagePath} from '../actions'
import AddCaption from './AddCaption'

class AddCaptionContainer extends React.Component {
  componentDidMount () {
    const id = Number(this.props.match.params.id)
    getImageById(id, (err, res) => {
      if (err) return console.log(err) // TODO: Error component
      this.props.dispatch(imagePath(res))
    })
  }

  render () {
    const imageId = this.props.routerProps.match.params.id
    const navigate = this.props.routerProps.history.push
    return (
      <div className="add-caption-container">
        <img src={this.props.image} className="image-add-caption"/>
        <AddCaption imageId={imageId} navigate={navigate} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    image: state.singleImage.path
  }
}

export default connect(mapStateToProps)(AddCaptionContainer)
