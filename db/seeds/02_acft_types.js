exports.seed = function(knex, Promise) {

  return knex('acft_types').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('acft_types').insert({type: 'A319', iata: '319', mfr: 'Airbus', widebody: false}),
        knex('acft_types').insert({type: 'A320', iata: '320', mfr: 'Airbus', widebody: false}),
        knex('acft_types').insert({type: 'A321', iata: '321', mfr: 'Airbus', widebody: false}),
        knex('acft_types').insert({type: 'A330', iata: '333', mfr: 'Airbus', widebody: false}),
        knex('acft_types').insert({type: 'B767', iata: '763', mfr: 'Boeing', widebody: true}),
        knex('acft_types').insert({type: 'E175', iata: 'E75', mfr: 'Embraer', widebody: false}),
        knex('acft_types').insert({type: 'E190', iata: 'E90', mfr: 'Embraer', widebody: false}),
        knex('acft_types').insert({type: 'B777', iata: '777', mfr: 'Boeing', widebody: true}),
        knex('acft_types').insert({type: 'B787', iata: '787', mfr: 'Boeing', widebody: true}),
        knex('acft_types').insert({type: 'B1900', iata: 'BEH', mfr: 'Beechcraft', widebody: false}),
        knex('acft_types').insert({type: 'DHC-8', iata: 'DH8', mfr: 'Bombardier', widebody: false}),
        knex('acft_types').insert({type: 'CRJ', iata: 'CRJ', mfr: 'Bombardier', widebody: false}),
      ]);
    });

};
