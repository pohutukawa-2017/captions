module.exports = {
  getImages,
  getUsers,
  getUserByName,
  getCaptionsById,
  getImageById,
  postNewCaption,
  postImage,
  addUser
}

function getImages (conn) {
  return conn('images')
   .select()
   .orderByRaw('id DESC')
}

function getUsers (connection) {
  return connection('users').select()
}

function getUserByName (username, connection) {
  return connection('users')
    .select()
    .where('username', username)
}

function addUser (user, connection) {
  return connection('users')
    .insert(user)
}

function getCaptionsById (id, conn) {
  return conn('captions')
  .select('id', 'image_id as imageId', 'caption_text as captionText')
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

function postImage (path, conn) {
  return conn('images')
  .insert({
    path: path
  })
}
