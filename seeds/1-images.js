
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, user_id: 1, path: 'http://res.cloudinary.com/dboovyrqb/image/upload/v1496983983/ryzz6g5j2wa5jbwlsiu2.jpg'},
        {id: 2, user_id: 1, path: 'http://res.cloudinary.com/dboovyrqb/image/upload/v1496983942/e0teccqw5nuqdolidyr3.jpg'},
        {id: 3, user_id: 3, path: 'http://res.cloudinary.com/dboovyrqb/image/upload/v1496964980/btij0pgx4sr5fbl0ie6p.jpg'},
        {id: 4, user_id: 1, path: 'http://res.cloudinary.com/dboovyrqb/image/upload/v1496904248/pexels-photo-401107_pllayf.jpg'},
        {id: 5, user_id: 2, path: 'http://res.cloudinary.com/dboovyrqb/image/upload/v1496963012/qrhk4loes3ied656csys.jpg'},
        {id: 6, user_id: 3, path: 'http://res.cloudinary.com/dboovyrqb/image/upload/v1496788072/sample.jpg'}
      ])
    })
}
