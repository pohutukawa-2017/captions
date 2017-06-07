import React from 'react'
import CaptionListItem from './CaptionListItem'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function CaptionList (props) {
  console.log(props)
  return (
<<<<<<< HEAD
    <div className='captionList'>
      <ul>
        {props.captions.map((item, key) => {
          return (
            <li key={key}>{item.caption_text}</li>
          )
        })}
      </ul>
=======
    <div className="caption-list">
    
        {props.captions.map(((item, key) => {
          return(
            <div>
              <CaptionListItem caption={item.caption_text} />
            </div>
      
          )
        }))}
      
>>>>>>> 714654b2491b1424610303b6e26b96a78679d892
    </div>
  )
}

export default CaptionList
