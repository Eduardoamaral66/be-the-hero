const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

console.log(process.env.ENV_NODE);
const connection = knex(config);

module.exports = connection;
