const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require('./data.json')
const router = jsonServer.router(data)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(process.env.PORT || 4000, () => {
  console.log('JSON Server is running')
})
