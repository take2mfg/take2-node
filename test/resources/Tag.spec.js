import Take2 from '../../lib/take2';

const take2    = Take2(global.TEST_AUTH_KEY, { spyable: true });
const Resource = 'Tag';

describe(`${Resource} Resource`, function() {

  describe('list', function() {
    it('sends the correct request', function() {
      take2.tags.list();
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://take2-loopback.herokuapp.com:80/api/v1/tags',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('retrieve', function() {
    it('sends the correct request', function() {
      take2.tags.retrieve(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://take2-loopback.herokuapp.com:80/api/v1/tags/1',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  // describe('create', function() {
  //   it('sends the correct request', function() {
  //     take2.tags.create({ name: 'Test Data' });
  //     expect(take2.LAST_REQUEST).to.deep.equal({
  //       method: 'POST',
  //       url: 'http://take2-loopback.herokuapp.com:80/api/v1/tags',
  //       headers: {
  //         'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
  //         'Content-Type'  : 'application/json'
  //       },
  //       json: {
  //         name: 'Test Data'
  //       }
  //     });
  //   });
  // });

  // describe('update', function() {
  //   it('sends the correct request', function() {
  //     take2.tags.update(1, { name: 'Test Data' });
  //     expect(take2.LAST_REQUEST).to.deep.equal({
  //       method: 'PUT',
  //       url: 'http://take2-loopback.herokuapp.com:80/api/v1/tags/1',
  //       headers: {
  //         'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
  //         'Content-Type'  : 'application/json'
  //       },
  //       json: {
  //         name: 'Test Data'
  //       }
  //     });
  //   });
  // });

  // describe('destroy', function() {
  //   it('sends the correct request', function() {
  //     take2.tags.destroy(1);
  //     expect(take2.LAST_REQUEST).to.deep.equal({
  //       method: 'DELETE',
  //       url: 'http://take2-loopback.herokuapp.com:80/api/v1/tags/1',
  //       headers: {
  //         'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
  //         'Content-Type'  : 'application/json'
  //       }
  //     });
  //   });
  // });

});