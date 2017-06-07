import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import { apiGetImageById } from '../api/'
import {getImage} from '../actions/'

import CaptionList from './CaptionList'
import Image from './Image'

class ImageContainer extends React.Component{
	constructor(props){
		super(props)
		this.getImagePath = this.getImagePath.bind(this)
	}

  componentDidMount(){
    this.getImagePath()
  }

	getImagePath(){
		const id = Number(this.props.match.params.id)
	   apiGetImageById(id, (err, res) => {
			if (err) console.log(err)
			this.props.dispatch(getImage(res))
		})
	}

  render(){
    return(
      <div>
				<Image imgUrl={this.props.image}/>
				<CaptionList />
      </div>
    )
  }
}

function mapStateToProps (state) {
	return {
		image: state.getImage.singleImage
	}
}

export default connect(mapStateToProps)(ImageContainer)