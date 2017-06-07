module.exports={
  getCaptionsById,
  getImageById
}

function getCaptionsById(id, conn){
  return conn('captions')
  .select()
  .where('image_id', id)
}


function getImageById(id, conn){
  return conn('images')
  .select()
  .where('id', id)
}