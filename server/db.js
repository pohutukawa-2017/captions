module.exports = {
  getUsers: getUsers,
  getUserByName: getUserByName
}

function getUsers (connection) {
  return connection('users').select()
}

function getUserByName (username, connection) {
  return connection('users')
    .select()
    .where('username', username)
}
