'use strict';

describe('Service: WEBSOCKETURL', function () {

  // load the service's module
  beforeEach(module('providerApp'));

  // instantiate service
  var WEBSOCKETURL;
  beforeEach(inject(function (_WEBSOCKETURL_) {
    WEBSOCKETURL = _WEBSOCKETURL_;
  }));

  it('should do something', function () {
    expect(!!WEBSOCKETURL).toBe(true);
  });

});
