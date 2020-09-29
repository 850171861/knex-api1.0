module.exports = {
  development: {
    client: 'pg',
    connection: { user: '', database: 'school', password: '', filename: './db' },
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
      database: 'school',
      user: '',
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
}
