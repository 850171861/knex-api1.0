module.exports = {
    development: {
      client: 'pg',
      connection: { user: '', database: 'test',password: '', filename: './db', },
      seeds: {
        directory: './db/seeds'
      },
      migrations: {
        directory: './db/migrations/'
      }
    },
    production: {
      client: 'pg',
      connection: {
        database: 'test',
        user:     '',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './db/migrations/'
      }
    }
  };
  