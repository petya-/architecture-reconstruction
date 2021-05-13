import express from 'express'
import path from 'path'
import * as routes from './routes'

const app = express()
const port = 8080 // default port to listen

// Configure Express to parse JSON
app.use(express.json())

// Configure Express to use EJS
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

// Configure routes
routes.register(app)

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`)
})
