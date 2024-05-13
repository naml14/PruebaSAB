// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
