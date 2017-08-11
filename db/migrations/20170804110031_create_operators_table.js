
exports.up = function(knex, Promise) {
  return knex.schema.createTable('operators', function (t) {
    t.string('operator').primary();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('operators');
};
