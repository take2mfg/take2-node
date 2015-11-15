import Take2 from '../../lib/take2';

const take2    = Take2(global.TEST_AUTH_KEY, { spyable: true });
const Resource = 'Cart';

describe(`${Resource} Resource`, function() {

  describe('retrieve', function() {
    it('sends the correct request', function() {
      take2.carts.retrieve(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://take2-loopback.herokuapp.com:80/api/v1/carts/1',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('create', function() {
    it('sends the correct request', function() {
      take2.carts.create({ name: 'Test Data' });
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: 'http://take2-loopback.herokuapp.com:80/api/v1/carts/createFromVisitorToken',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        },
        json: {
          name: 'Test Data'
        }
      });
    });
  });


});