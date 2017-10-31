'use strict';

describe('Controller: OrdercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('supermarketFrontApp'));

  var OrdercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrdercontrollerCtrl = $controller('OrdercontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrdercontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
