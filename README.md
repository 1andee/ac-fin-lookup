# AC Fin-Lookup
A web app built with Node.js, Express.js, PostgreSQL, and Knex.js to search the Air Canada fleet by fin number, registration, or carrier.

## Live Demo
http://fin-search.herokuapp.com

## Why?
While fin numbers are used internally within the airline, virtually every outside agency refer to aircraft by civil registration. This tool simplifies the lookup process, where a spreadsheet or static HTML page would be normally required.

## Disclaimer
This app is not sanctioned by or affiliated with Air Canada in any way, and I take no responsibility for its accuracy or usage.

## Running the App Locally in Development Mode
1. Fork and clone your fork of this repository.
2. Install dependencies using `npm install`
3. Create the PostgreSQL database from the command line: `createdb acfin`
4. Create .env file based on .env.example
5. Run the schema and seedfile from the command line: `knex migrate:latest` and `knex seed:run`
6. Start the web server from the command line: `npm start`
7. Open the app on `http://localhost:8080/` in your web browser.

## Dependencies
- Node.js
- Express
- knex.js
- PostgreSQL
- EJS
- body-parser
- dotenv
