'use strict';
const http = require('node:http');
const port = Number(process.env.PORT || 3000);
const server = http.createServer((req, res) => {
  const path = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  if (path === '/health' || path === '/ready') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'ok', service: 'devsecops-demo' }));
  }
  if (path === '/') {
    res.writeHead(200);
    return res.end(JSON.stringify({ name: 'DevSecOps Demo Service', status: 'running' }));
  }
  res.writeHead(404);
  res.end(JSON.stringify({ error: 'not_found' }));
});
server.listen(port, '0.0.0.0', () => console.log(`listening on ${port}`));
module.exports = server;
