
exports.up = function(knex, Promise) {
  return knex.schema.createTable('acft_types', function (t) {
    t.string('type').primary();
    t.string('iata');
    t.string('mfr');
    t.boolean('widebody');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('acft_types');
};
