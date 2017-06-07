import React from 'react'
import CaptionListItem from './CaptionListItem'

<<<<<<< HEAD
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function CaptionList (props) {
  console.log(props)
  return (

    <div className='caption-list'>

      {props.captions.map((item, key) => {
        return (
          <div>
            <CaptionListItem image_id={item.image_id} id={item.id} caption={item.caption_text} />
          </div>
        )
      })}

=======
function CaptionList (props){
  return (
    <div className="caption-list">
        {props.captions.map(((item, key) => {
          return(
            <div key={key}>
              <CaptionListItem caption={item.caption_text} />
            </div>
          )
        }))}
>>>>>>> fcb52a01536675b3b465bc6074e0734417b1e6f8
    </div>
  )
}

export default CaptionList
