const server = require('./index');
const request = require('supertest');

describe('server', () => {
  it('should repond with "hello world"', (done) => {
    request(server)
      .get('/')
      .expect('hello world')
      .expect(200, done);
  });

  after(() => server.close());
});