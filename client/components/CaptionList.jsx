import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'

import CaptionListItem from './CaptionListItem'
import Image from './Image'

class CaptionList extends React.Component{
	constructor(props){
		super(props)
		this.getImagePath = this.getImagePath.bind(this)
	}

	getImagePath(){
		const id = Number(props.match.params.id)

	}

  render(){
    return(
      <div>
				<Image imagePath={this.getImagePath}/>
				{props.map((item) => {
					return(
						<CaptionListItem parentprops={item.id} />
					)
				})}
      </div>
    )
  }
}

function mapStateToProps (state) {
	return {
		images: state
	}
}

export default connect(mapStateToProps)(CaptionList)