import knex from "knex";

const knexInstace = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'user',
    password: 'password',
    database: 'cartManager'
  },
  pool: { min: 0, max: 20 }
})

export default knexInstace
