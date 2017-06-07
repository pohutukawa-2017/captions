
exports.up = function(knex, Promise) {
  return knex.schema.createTable('captions', table => {
      table.increments('id').primary()
      table.integer('image_id').references('images.id')
      table.string('caption_text')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('captions')
};
