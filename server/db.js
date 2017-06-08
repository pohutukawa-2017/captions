module.exports = {
  getUsers,
  getUserByName,
  getCaptionsById,
  getImageById,
  addUser
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
  console
  return connection('users')
    .insert(user)
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
