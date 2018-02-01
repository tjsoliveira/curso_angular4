import * as jsonServer from 'json-server';
import {Express} from 'express';

import * as fs from 'fs';
import * as https from 'https';

const server: Express = jsonServer.create()
const router = jsonServer.router('../db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.use(jsonServer.bodyParser)
server.use(router)

const options = {
  cert: fs.readFileSync('./keys/cert.pem'),
  key: fs.readFileSync('./keys/key.pem')
}

https.createServer(options, server).listen(3002, () => {
  console.log('JSON Server is running on https://localhost:3001')
})

// server.listen(3000, () => {
//   console.log('JSON Server is running')
// })
