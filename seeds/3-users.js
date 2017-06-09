exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'SeedUser', profile_pic: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA2gAAAAJGY4YmQxZmVjLTAwMzAtNDZhMS04OWEzLWNlM2QyZjk2OWRiZA.jpg'},
        {id: 2, username: 'AnotherSeedUser', profile_pic: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/000/236/188/0e04aba.jpg'},
        {id: 3, username: 'ThirdSeedUser', profile_pic: 'https://cdn-images-1.medium.com/max/800/1*68i7NB61D8E9Yi4NcxJkdQ.jpeg'}
      ])
    })
}
