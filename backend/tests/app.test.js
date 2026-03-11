const request = require('supertest');
const app = require('../server'); // path to your server.js

describe('Backend API', () => {
  it('should return 200 for health check', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('OK');
  });
});

