'use strict';

describe('Service: PUSHAPIKEY', function () {

  // load the service's module
  beforeEach(module('providerApp'));

  // instantiate service
  var PUSHAPIKEY;
  beforeEach(inject(function (_PUSHAPIKEY_) {
    PUSHAPIKEY = _PUSHAPIKEY_;
  }));

  it('should do something', function () {
    expect(!!PUSHAPIKEY).toBe(true);
  });

});
