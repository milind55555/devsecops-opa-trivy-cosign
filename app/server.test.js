const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const server = require('./server');

test('health endpoint returns healthy status', async () => {
  await new Promise(resolve => server.listening ? resolve() : server.once('listening', resolve));
  const address = server.address();
  const result = await new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${address.port}/health`, response => {
      let body = '';
      response.on('data', chunk => body += chunk);
      response.on('end', () => resolve({ status: response.statusCode, body: JSON.parse(body) }));
    }).on('error', reject);
  });
  assert.equal(result.status, 200);
  assert.equal(result.body.status, 'ok');
  server.close();
});
