
exports.up = function (knex, Promise) {
  return knex.schema.createTable('images', table => {
    table.increments('id').primary()
    table.string('path')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('images')
}
