'use strict';

describe('Service: BASEURL', function () {

  // load the service's module
  beforeEach(module('providerApp'));

  // instantiate service
  var BASEURL;
  beforeEach(inject(function (_BASEURL_) {
    BASEURL = _BASEURL_;
  }));

  it('should do something', function () {
    expect(!!BASEURL).toBe(true);
  });

});
