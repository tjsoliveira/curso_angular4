"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("https");
var server = jsonServer.create();
var router = jsonServer.router('../db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// Add custom routes before JSON Server router
server.use(jsonServer.bodyParser);
server.use(router);
var options = {
    cert: fs.readFileSync('./keys/cert.pem'),
    key: fs.readFileSync('./keys/key.pem')
};
https.createServer(options, server).listen(3001, function () {
    console.log('JSON Server is running on https://localhost:3001');
});
// server.listen(3000, () => {
//   console.log('JSON Server is running')
// })
