
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('captions').del()
    .then(function () {
      // Inserts seed entries
      return knex('captions').insert([
        {id: 1, image_id: 1, caption_text: 'woof'},
        {id: 2, image_id: 1, caption_text: 'good boy'},
        {id: 3, image_id: 2, caption_text: 'fingers'}
      ])
    })
}
