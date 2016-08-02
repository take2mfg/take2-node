import Take2 from '../../lib/take2';

const take2    = Take2(global.TEST_AUTH_KEY, { spyable: true });
const Resource = 'ManufacturingTag';

describe(`${Resource} Resource`, function() {

  describe('list', function() {
    it('sends the correct request', function() {
      take2.manufacturingTags.list();
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://take2-loopback.herokuapp.com:80/api/v1/manufacturingTags',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  describe('retrieve', function() {
    it('sends the correct request', function() {
      take2.manufacturingTags.retrieve(1);
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: 'http://take2-loopback.herokuapp.com:80/api/v1/manufacturingTags/1',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        }
      });
    });
  });

  // describe('create', function() {
  //   it('sends the correct request', function() {
  //     take2.manufacturingTags.create({ name: 'Test Data' });
  //     expect(take2.LAST_REQUEST).to.deep.equal({
  //       method: 'POST',
  //       url: 'http://take2-loopback.herokuapp.com:80/api/v1/manufacturingTags',
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
  //     take2.manufacturingTags.update(1, { name: 'Test Data' });
  //     expect(take2.LAST_REQUEST).to.deep.equal({
  //       method: 'PUT',
  //       url: 'http://take2-loopback.herokuapp.com:80/api/v1/manufacturingTags/1',
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
  //     take2.manufacturingTags.destroy(1);
  //     expect(take2.LAST_REQUEST).to.deep.equal({
  //       method: 'DELETE',
  //       url: 'http://take2-loopback.herokuapp.com:80/api/v1/manufacturingTags/1',
  //       headers: {
  //         'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
  //         'Content-Type'  : 'application/json'
  //       }
  //     });
  //   });
  // });

});