import Take2 from '../../lib/take2';

const take2    = Take2(global.TEST_AUTH_KEY, { spyable: true });
const Resource = 'VisitorToken';

describe(`${Resource} Resource`, function() {

  describe('create', function() {
    it('sends the correct request', function() {
      take2.visitorTokens.create({});
      expect(take2.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: 'http://take2-loopback.herokuapp.com:80/api/v1/visitorTokens',
        headers: {
          'Authorization' : `Bearer ${TEST_AUTH_KEY}`,
          'Content-Type'  : 'application/json'
        },
        json: {}
      });
    });
  });

});