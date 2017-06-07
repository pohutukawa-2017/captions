module.exports = {
  getCaptionsById,
  getImageById,
  postNewCaption
}

function getCaptionsById (id, conn) {
  return conn('captions')
  .select()
  .where('image_id', id)
}

function getImageById (id, conn) {
  return conn('images')
  .select()
  .where('id', id)
}

function postNewCaption (text, imageId, conn) {
  return conn('captions')
  .insert({
    image_id: imageId,
    caption_text: text
  })
}
