exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Jules', password: 'jules', profile_pic: ''},
        {id: 2, username: 'Jae', password: 'jae', profile_pic: ''},
        {id: 3, username: 'Rob', password: 'rob', profile_pic: ''}
      ])
    })
}
