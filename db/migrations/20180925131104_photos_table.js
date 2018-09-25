
exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', table => {
    table.string('link').notNullable();
    table.integer('owner').references('users.id');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photos');  
};
