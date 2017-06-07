import React from 'react'
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react'

function ImageSpike () {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Image cloudName="dboovyrqb" publicId="pexels-photo-401107_gyt0wn" width="300" crop="scale"/>
      <CloudinaryContext cloudName="dboovyrqb">
        <Image publicId="sample">
          <Transformation width="200" crop="scale" angle="10"/>
        </Image>
      </CloudinaryContext>
    </div>
  )
  document.getElementById('example')
}

export default ImageSpike
