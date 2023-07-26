const knex = require('knex')

const knexInstace = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'your_database_password',
    password: 'password',
    database: 'cartManager'
  },
  pool: { min: 0, max: 20 }
})

module.exports = knexInstace
