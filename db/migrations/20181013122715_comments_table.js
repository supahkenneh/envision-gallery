
exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments();
    table.integer('author').references('users.id');
    table.integer('photo_id').references('photos.id');
    table.text('content');
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('comments');
};
