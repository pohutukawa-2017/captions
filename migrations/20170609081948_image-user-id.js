exports.up = function (knex, Promise) {
  return knex.schema.table('images', (table) => {
    table.integer('user_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('images', (table) => {
    table.dropColumn('user_id')
  })
}
