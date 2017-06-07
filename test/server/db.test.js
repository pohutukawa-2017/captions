const test = require('ava')
const knex = require('knex')

const config = require('../../knexfile').test

const db = require('../../server/db')

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
test.beforeEach(function (t) {
  t.context.db = knex(config)
  return t.context.db.migrate.latest()
    .then(function () {
      return t.context.db.seed.run('test')
    })
})

// Destroy the database connection after each test.
test.afterEach(function (t) {
  t.context.db.destroy()
})

test('getUsers gets all users', function (t) {
  // 3 users in test seed data
  var expected = 3
  return db.getUsers(t.context.db)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getUsers returns correct name of user', function (t) {
  // 3 users in test seed data
  var expected = 'Rory'
  return db.getUsers(t.context.db)
    .then(function (result) {
      var actual = result[1].username
      t.is(expected, actual)
    })
})
