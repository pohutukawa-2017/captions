exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Luke', password: 'luke', profile_pic: ''},
        {id: 2, username: 'Rory', password: 'rory', profile_pic: ''},
        {id: 3, username: 'Don', password: 'don', profile_pic: ''}
      ])
    })
}
