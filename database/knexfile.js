require('dotenv').config();

module.exports ={
  client: 'process.env.local.client',
  connection: {
      host: 'process.env.local.host',
      user:'process.env.local.user',
      password:'process.env.local.password',
      database: 'process.env.local.database'
  },
  debug: false
}