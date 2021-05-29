const express = require('express')
const routes = require('./routes/index')
const bodyParser = require('body-parser')
const path = require('path')

// Create an Express application
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/', routes)

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

global.appRoot = path.resolve(__dirname)

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on http://localhost:${port}`)
})

module.exports = {
  app, // export app and set as entry point for GCloud func
}
