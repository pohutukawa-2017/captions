exports.up = function (knex) {
  return knex.schema.createTable('users', function (t) {
    t.increments('id').primary()
    t.string('username')
    t.string('profile_pic')
    t.string('password')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
