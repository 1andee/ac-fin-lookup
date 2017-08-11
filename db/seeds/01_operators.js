exports.seed = function(knex, Promise) {

  return knex('operators').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('operators').insert({operator: 'Air Canada'}),
        knex('operators').insert({operator: 'Rouge'}),
        knex('operators').insert({operator: 'Jazz'}),
        knex('operators').insert({operator: 'Sky Regional'}),
        knex('operators').insert({operator: 'Air Georgian'}),
        knex('operators').insert({operator: 'EVAS'})
      ]);
    });

};
