import React from 'react'
import CaptionListItem from './CaptionListItem'

function CaptionList (props) {
  return (
    <div className='caption-list'>
      {props.captions.map((item, key) => {
        return (
          <div key={key}>
            <CaptionListItem image_id={item.image_id} id={item.id} caption={item.caption_text} />
          </div>
        )
      })}

    </div>
  )
}

export default CaptionList
