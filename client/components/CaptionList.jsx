import React from 'react'
import CaptionListItem from './CaptionListItem'

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

    </div>
  )
}

export default CaptionList
