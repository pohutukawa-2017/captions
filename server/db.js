module.exports = {
  getCaptionsById,
  getImageById
}

function getCaptionsById (id, conn) {
  return conn('captions')
  .select(`id`, 'image_id as imageId', 'caption_text as captionText')
  .where('image_id', id)
}

function getImageById (id, conn) {
  return conn('images')
  .select()
  .where('id', id)
}
