exports.up = function (knex, Promise) {
  return knex.schema.table('captions', (table) => {
    table.integer('user_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('captions', (table) => {
    table.dropColumn('user_id')
  })
}
