const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('fetch recipes based on the user query', () => {
  it('should return a JSON with recipes', async (done) => {
    const response = await request.post('/recipes');

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
    done();
  });
});
