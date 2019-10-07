const request = require('supertest');
const app = require('../app');

const API_PATH_V1 = '/api/v1'

const TEST_URLS = {
  EXAMPLE: `${API_PATH_V1}/example`,
}
describe('Example Test Cases', function() {
  it('has the correct example function', function(done) {
    request(app)
      .get(TEST_URLS.EXAMPLE)
      .expect(/example/, done);
  });
}); 
