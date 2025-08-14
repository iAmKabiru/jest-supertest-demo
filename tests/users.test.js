const request = require('supertest');
const app = require('../src/app');

describe('Users API', () => {
  test('GET /users should return array of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /users should create a new user', async () => {
    const res = await request(app).post('/users').send({ name: 'New User' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name', 'New User');
  });

  test('PUT /users/:id should update an existing user', async () => {
    const res = await request(app).put('/users/1').send({ name: 'Updated Name' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name', 'Updated Name');
  });

  test('DELETE /users/:id should delete a user', async () => {
    const res = await request(app).delete('/users/1');
    expect(res.statusCode).toBe(204);
  });
});
