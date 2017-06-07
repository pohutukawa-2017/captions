import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CaptionList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.captionsList[2].image)
    return (
      <div>
        <img src={this.props.image} />
        <Link to={`/images/${this.props.captionsList[2].id}/${this.props.captionsList[0].id}`} ><p>{this.props.captionsList[0].caption}</p></Link>
        <Link to={`/caption/${this.props.captionsList[1].id}`}><p>{this.props.captionsList[1].caption}</p></Link>>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    image: state.captions.image,
    captionsList: state.captions.captions
  }
}

export default connect(mapStateToProps)(CaptionList)
