module.exports = {
  getImages,
  getCaptionsById,
  getImageById
}

function getImages (conn) {
  return conn('images')
  .select()
  .orderByRaw('id DESC')
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
