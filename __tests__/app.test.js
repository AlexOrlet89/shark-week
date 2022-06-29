const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should return a baby shark', async () => {
    const response = await request(app).get('/sharks');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([
      {
        id: '1',
        scientific_name: 'Baby Shark',
        family: 'Everyone',
        kingdom: 'Philodendron',
        living: 'yes',
        random_fact: 'doot dooot doot',
      },
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
