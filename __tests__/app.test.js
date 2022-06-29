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
  it('POST /sharks should create a new shark', async () => {
    const resp = await request(app).post('/sharks').send({
      id: '2',
      scientific_name: 'Otodus megalodon',
      family: 'Otodontidae',
      kingdom: 'Animal',
      living: 'extinct',
      random_fact: 'big tooth',
    });
    console.log(resp.body);
    expect(resp.status).toEqual(200);
    expect(resp.body.scientific_name).toEqual('Otodus megalodon');
    expect(resp.body.family).toEqual('Otodontidae');
    expect(resp.body.kingdom).toEqual('Animal');
    expect(resp.body.living).toEqual('extinct');
    expect(resp.body.random_fact).toEqual('big tooth');
    expect(resp.body.id).not.toBeUndefined();
  });

  it('test to render shark by id', async () => {
    const resp = await request(app).get('/sharks/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toEqual({
      id: '1',
      scientific_name: 'Baby Shark',
      family: 'Everyone',
      kingdom: 'Philodendron',
      living: 'yes',
      random_fact: 'doot dooot doot',
    });
  });
  afterAll(() => {
    pool.end();
  });
});
