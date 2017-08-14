
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fins', function (t) {
    t.increments();
    t.string('fin');
    t.string('reg');
    t.string('type');
    t.foreign('type').references('type').inTable('acft_types').onDelete('CASCADE');
    t.string('specific_type');
    t.string('operator');
    t.foreign('operator').references('operator').inTable('operators').onDelete('CASCADE');
    t.string('comments');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fins');
};
