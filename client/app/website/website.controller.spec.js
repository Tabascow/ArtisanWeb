'use strict';

describe('Controller: WebsiteCtrl', function () {

  // load the controller's module
  beforeEach(module('artisanWebApp'));

  var WebsiteCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebsiteCtrl = $controller('WebsiteCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
