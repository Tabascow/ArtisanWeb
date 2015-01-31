'use strict';

describe('Service: website', function () {

  // load the service's module
  beforeEach(module('artisanWebApp'));

  // instantiate service
  var website;
  beforeEach(inject(function (_website_) {
    website = _website_;
  }));

  it('should do something', function () {
    expect(!!website).toBe(true);
  });

});
