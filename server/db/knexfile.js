const path = require('path')

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3')
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, cb) => conn.run('PRAGMA foreign_keys = ON', cb)
    }
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: {
      coonectionString: `${process.env.DATABASE_URL}?ssl=true`,
      ssl: { rejectUnauthorized: false }
    }, 
    migrations: {
        directory: './migrations',
    },
    seeds: { directory: './seeds' }
  }
}
