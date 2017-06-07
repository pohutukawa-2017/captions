module.exports = {
  getUsers: getUsers
}

function getUsers (connection) {
  return connection('users').select()
}
