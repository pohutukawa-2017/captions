module.exports = {
  getImages,
  getUsers,
  getUserByName,
  getCaptionsById,
  getImageById,
  postNewCaption,
  removeCaption,
  addUser
}

function getImages (conn) {
  return conn('images').select().orderByRaw('id DESC')
}

function getUsers (conn) {
  return conn('users').select()
}

function getUserByName (username, conn) {
  return conn('users').select().where('username', username)
}

function addUser (user, conn) {
  return conn('users').insert(user)
}

function getCaptionsById (id, conn) {
  return conn('captions')
    .select('id', 'image_id as imageId', 'caption_text as captionText')
    .where('image_id', id)
}

function getImageById (id, conn) {
  return conn('images').select().where('id', id)
}

function postNewCaption (text, imageId, conn) {
  return conn('captions')
  .insert({
    image_id: imageId,
    caption_text: text
  })
}

function removeCaption (captionId, conn) {
  return conn('captions').where('id', captionId).del()
}
