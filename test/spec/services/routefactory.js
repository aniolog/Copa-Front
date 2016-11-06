'use strict';

describe('Service: routeFactory', function () {

  // load the service's module
  beforeEach(module('providerApp'));

  // instantiate service
  var routeFactory;
  beforeEach(inject(function (_routeFactory_) {
    routeFactory = _routeFactory_;
  }));

  it('should do something', function () {
    expect(!!routeFactory).toBe(true);
  });

});
