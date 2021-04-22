const express = require('express')
const routes = require('./routers/routes')
const bodyParser = require('body-parser')

module.exports = function mainApp (port) {
  const app = express()
  app.use(express.json())
  app.use(routes)
  app.use(express.urlencoded({ extended: false }))
  app.listen(port, () => console.log(`this app run at port:${port}`))
}
