'use strict';

describe('Service: interceptorService', function () {

  // load the service's module
  beforeEach(module('providerApp'));

  // instantiate service
  var interceptorService;
  beforeEach(inject(function (_interceptorService_) {
    interceptorService = _interceptorService_;
  }));

  it('should do something', function () {
    expect(!!interceptorService).toBe(true);
  });

});
