import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {getImageById, getCaptionsById} from '../api'
import {imagePath, captions} from '../actions/'

import CaptionList from './CaptionList'
import Image from './Image'

class ImageContainer extends React.Component {
  constructor (props) {
    super(props)
    this.getImagePath = this.getImagePath.bind(this)
    this.getCaptionsList = this.getCaptionsList.bind(this)
  }

  componentDidMount () {
    this.getImagePath()
    this.getCaptionsList()
  }

  getImagePath () {
    const id = Number(this.props.match.params.id)
    getImageById(id, (err, res) => {
      if (err) return console.log(err) //TODO: Error component
      this.props.dispatch(imagePath(res))
    })
  }

  getCaptionsList () {
    const id = Number(this.props.match.params.id)
    getCaptionsById(id, (err, res) => {
      if (err) return console.log(err) //TODO: Error component
      this.props.dispatch(captions(res))
    })
  }

  render () {
    return (
      <div className='image-container'>
        <Image imgUrl={this.props.image} />
        <CaptionList captions={this.props.captions} />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    image: state.singleImage,
    captions: state.captions
  }
}

export default withRouter(connect(mapStateToProps)(ImageContainer))
