module.exports = {
  getImages: getImages
}

function getImages (connection) {
  return connection('images')
  .select()
}
