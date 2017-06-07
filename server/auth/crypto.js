function verifyUser (user, password) {
  return user.password === password
}

module.exports = {
  verifyUser
}
