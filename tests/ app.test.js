const request = require('supertest');
const app = require('../src/app');

describe('GET /hello', () => {
  test('should return Hello, world! message', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello, world!');
  });
});
