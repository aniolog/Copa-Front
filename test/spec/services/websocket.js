'use strict';

describe('Service: webSocket', function () {

  // load the service's module
  beforeEach(module('providerApp'));

  // instantiate service
  var webSocket;
  beforeEach(inject(function (_webSocket_) {
    webSocket = _webSocket_;
  }));

  it('should do something', function () {
    expect(!!webSocket).toBe(true);
  });

});
