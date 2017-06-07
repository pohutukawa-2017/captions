const test = require('ava')
const knex = require('knex')

const config = require('../../knexfile').test

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
test.beforeEach(function (t) {
  t.context.db = knex(config)
  // return t.context.db.migrate.latest()
  //   .then(function () {
  //     return t.context.db.seed.run('test')
  //   })
})

// Destroy the database connection after each test.
test.afterEach(function (t) {
  t.context.db.destroy()
})

test('test harness is working', function (t) {
  t.pass()
})
