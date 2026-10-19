import { test } from 'node:test';
import assert from 'node:assert/strict';
import app from '../src/app.js';

test('GET /about returns API info', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://localhost:${port}/about`);
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.equal(body.name, 'Product CRUD API');
    assert.equal(body.version, '1.0.0');
    assert.ok(body.description);
  } finally {
    server.close();
  }
});
