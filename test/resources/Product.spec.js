import Take2 from '../../lib/take2';

const take2    = Take2(global.TEST_AUTH_KEY, { spyable: true });
const Resource = 'Product';

describe(`${Resource} Resource`, function() {

  describe('list', function() {
    it('sends the correct request', function() {
      take2.products.list();
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://api.take2.co:443/v1/Products',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('retrieve', function() {
    it('sends the correct request', function() {
      take2.products.retrieve(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://api.take2.co:443/v1/Products/1',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('create', function() {
    it('sends the correct request', function() {
      take2.products.create({ name: 'Test Data' });
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: 'http://api.take2.co:443/v1/Products',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        },
        json: {
          name: 'Test Data'
        }
      });
    });
  });

  describe('update', function() {
    it('sends the correct request', function() {
      take2.products.update(1, { name: 'Test Data' });
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'PUT',
        url: 'http://api.take2.co:443/v1/Products/1',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        },
        json: {
          name: 'Test Data'
        }
      });
    });
  });

  describe('destroy', function() {
    it('sends the correct request', function() {
      take2.products.destroy(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: 'http://api.take2.co:443/v1/Products/1',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

});