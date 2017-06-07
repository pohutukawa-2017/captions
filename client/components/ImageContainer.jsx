import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import { apiGetImageById, apiGetCaptionsById } from '../api/'
import {getImage, getCaptions} from '../actions/'

import CaptionList from './CaptionList'
import Image from './Image'

class ImageContainer extends React.Component{
	constructor(props){
		super(props)
		this.getImagePath = this.getImagePath.bind(this)
    this.getCaptionsList = this.getCaptionsList.bind(this)
	}

  componentDidMount(){
    this.getImagePath()
    this.getCaptionsList()
  }

	getImagePath(){
		const id = Number(this.props.match.params.id)
	   apiGetImageById(id, (err, res) => {
			if (err) console.log(err)
			this.props.dispatch(getImage(res))
		})
	}

  getCaptionsList(){
    const id = Number(this.props.match.params.id)
    apiGetCaptionsById(id, (err, res)=> {
      if (err) console.log(err)
      this.props.dispatch(getCaptions(res))
    })
  }

  render(){
    return(
      <div className='image-container'>
				<Image imgUrl={this.props.image}/>
				<CaptionList captions={this.props.captions}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
	return {
		image: state.getImage.singleImage,
    captions: state.getCaptions.captions || []
	}
}

export default connect(mapStateToProps)(ImageContainer)