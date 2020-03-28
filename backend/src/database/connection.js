const knex = require("knex");
const configuration = require("../../knexfile");

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;
// definindo para realizar com conexão com o banco de dados definido para development
const connection = knex(config);

module.exports = connection;