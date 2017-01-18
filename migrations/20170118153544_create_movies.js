
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(table) {
    table.increments();
    table.string('title');
    table.integer('year');
    table.string('genre');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
