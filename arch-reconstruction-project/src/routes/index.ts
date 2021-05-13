import * as express from 'express'
import glob from 'glob'

export const register = (app: express.Application) => {
  const oidc = app.locals.oidc

  // define a route handler for the default home page
  app.get('/', (req: any, res) => {
    // options is optional
    glob('../../../Zeeguu-API/**/*.py', {}, (er, files) => {
      console.log(er)
      console.log(files)
    })
    res.render('index')
  })
}
