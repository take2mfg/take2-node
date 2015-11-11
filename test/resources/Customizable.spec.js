import Take2 from '../../lib/take2';

const take2    = Take2(global.TEST_AUTH_KEY, { spyable: true });
const Resource = 'Customizable';

describe(`${Resource} Resource`, function() {

  describe('list', function() {
    it('sends the correct request', function() {
      take2.customizables.list();
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://api.take2.co:443/v1/customizables',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('retrieve', function() {
    it('sends the correct request', function() {
      take2.customizables.retrieve(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://api.take2.co:443/v1/customizables/1',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('create', function() {
    it('sends the correct request', function() {
      take2.customizables.create({});
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: 'http://api.take2.co:443/v1/customizables',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        },
        json: {}
      });
    });
  });

  describe('update', function() {
    it('sends the correct request', function() {
      take2.customizables.update(1, {});
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'PUT',
        url: 'http://api.take2.co:443/v1/customizables/1',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        },
        json: {}
      });
    });
  });

  describe('destroy', function() {
    it('sends the correct request', function() {
      take2.customizables.destroy(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: 'http://api.take2.co:443/v1/customizables/1',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

});