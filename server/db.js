module.exports = {
  getUsers,
  getUserByName,
  getCaptionsById,
  getImageById
}

function getUsers (connection) {
  return connection('users').select()
}

function getUserByName (username, connection) {
  return connection('users')
    .select()
    .where('username', username)
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
