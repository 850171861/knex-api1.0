const environment = process.env.NODE_ENV || 'development'
// require environment's settings from knexfile
const config = require('../../knexfile')[environment]

const knex = require('knex')(config)

module.exports = { db: knex }