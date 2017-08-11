'use strict';

require('dotenv').config();

const PORT            = process.env.PORT || 8080;
const ENV             = process.env.NODE_ENV || 'development';
const express         = require('express');
const bodyParser      = require('body-parser');
const app             = express();

const knexConfig  = require('./knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Log HTTP requests to STDOUT
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT
app.use(knexLogger(knex));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
  res.render('index');
});

// Search field
app.post('/', (req, res) => {
  console.log('req.body.query:', req.body.query);
  let result = search(req.body.query)
  .then((result)=> {
    console.log('====================');
    console.log('====== RESULT ======');
    console.log(result)
    res.json(result);
    console.log('====================');
  });
});

// Knex SQL search by fin # OR registration
function search(id) {
  return knex('fins').where('id', 'like', `%${id}%`).orWhere('reg', 'like', `%${id}%`).orderBy('id', 'asc');
}

app.listen(PORT, () => {
  console.log('fin-lookup is listening on port ' + PORT);
});
