const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('fetch meal plans', () => {
  it('should return a JSON with meal plans', async (done) => {
    const response = await request.post('/getmealplan');

    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
    done();
  });
});
