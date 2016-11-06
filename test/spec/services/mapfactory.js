'use strict';

describe('Service: mapFactory', function () {

  // load the service's module
  beforeEach(module('providerApp'));

  // instantiate service
  var mapFactory;
  beforeEach(inject(function (_mapFactory_) {
    mapFactory = _mapFactory_;
  }));

  it('should do something', function () {
    expect(!!mapFactory).toBe(true);
  });

});
