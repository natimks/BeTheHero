const knex = require("knex");
const configuration = require("../../knexfile");

// definindo para realizar com conexão com o banco de dados definido para development
const connection = knex(configuration.development);

module.exports = connection;