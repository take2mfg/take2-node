import Take2 from '../../lib/take2';

const take2    = Take2(global.TEST_AUTH_KEY, { spyable: true });
const Resource = 'VisitorToken';

describe(`${Resource} Resource`, function() {

  describe('list', function() {
    it('sends the correct request', function() {
      take2.visitorTokens.list();
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://api.take2.co:443/v1/visitorTokens',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('retrieve', function() {
    it('sends the correct request', function() {
      take2.visitorTokens.retrieve(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://api.take2.co:443/v1/visitorTokens/1',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('create', function() {
    it('sends the correct request', function() {
      take2.visitorTokens.create({});
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: 'http://api.take2.co:443/v1/visitorTokens',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        },
        json: {}
      });
    });
  });

  describe('update', function() {
    it('sends the correct request', function() {
      take2.visitorTokens.update(1, {});
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'PUT',
        url: 'http://api.take2.co:443/v1/visitorTokens/1',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        },
        json: {}
      });
    });
  });

  describe('destroy', function() {
    it('sends the correct request', function() {
      take2.visitorTokens.destroy(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: 'http://api.take2.co:443/v1/visitorTokens/1',
        headers: {
          'Authorization' : `Basic ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

});