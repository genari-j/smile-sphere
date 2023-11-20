require('dotenv').config()

const express = require('express')
const consign = require('consign')
const database = require('./config/database')
const cors = require('cors')
const app = express()
const port = process.env.APP_PORT

app.use(express.json())
app.use(cors())
app.database = database

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./routes/routes.js')
  .into(app)

app.listen(port, () => {
  console.log(`Application is running on port: ${port}`)
})