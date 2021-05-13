const express = require('express')
const routes = require('./routes/index')

// Create an Express application
const app = express()
const port = 5000

app.use('/', routes)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})

module.exports = {
  app, // export app and set as entry point for GCloud func
}
