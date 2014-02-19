'use strict';

describe('Controller: LinechartCtrl', function () {

  // load the controller's module
  beforeEach(module('angularD3App'));

  var LinechartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinechartCtrl = $controller('LinechartCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});