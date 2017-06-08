import React from 'react'
import CaptionListItem from './CaptionListItem'

function CaptionList (props) {
  return (
    <div className='caption-list'>
      {props.captions.map((item, key) => {
        return (
          <div key={key}>
            <CaptionListItem imageId={item.imageId} id={item.id} caption={item.captionText} />
          </div>
        )
      })}
    </div>
  )
}

export default CaptionList
