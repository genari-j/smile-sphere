require('dotenv').config()
const path = require('path')

module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'patients_sys',
  },
  migrations: {
    directory: path.join(__dirname, '/migrations'),
  }
}