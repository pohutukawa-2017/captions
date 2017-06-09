module.exports = {
  getImages,
  getUsers,
  getUserByName,
  getCaptionsById,
  getImageById,
  postNewCaption,
  postImage,
  removeCaption,
  addUser,
  getUser,
  getImagesByUser,
  getCaptionById
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

function getUser (userId, connection) {
  return connection('users')
    .join('images', 'users.id', 'images.user_id')
    .where('users.id', userId)
    .select('users.id as userId', 'users.username', 'users.profile_pic', 'images.*')
}

function getCaptionsById (id, conn) {
  return conn('captions')
  .select('id', 'image_id as imageId', 'caption_text as captionText', 'user_id as userId')
  .where('image_id', id)
}

function getCaptionById (id, conn) {
  return conn('captions')
  .select('id', 'image_id as imageId', 'caption_text as captionText', 'user_id as userId')
  .where('id', id)
}

function getImageById (id, conn) {
  return conn('images')
  .select()
  .where('id', id)
}

function postNewCaption (data, imageId, conn) {
  return conn('captions')
  .insert({
    image_id: imageId,
    caption_text: data.text,
    user_id: data.userId
  })
}

function postImage (image, conn) {
  return conn('images')
  .insert({
    path: image.path,
    user_id: image.userId
  })
}

function removeCaption (captionId, conn) {
  return conn('captions')
  .where('id', captionId)
  .del()
}

function getImagesByUser (userId, connection) {
  return getImages(connection)
    .where('user_id', userId)
}
