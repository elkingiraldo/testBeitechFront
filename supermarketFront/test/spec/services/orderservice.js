'use strict';

describe('Service: orderservice', function () {

  // load the service's module
  beforeEach(module('supermarketFrontApp'));

  // instantiate service
  var orderservice;
  beforeEach(inject(function (_orderservice_) {
    orderservice = _orderservice_;
  }));

  it('should do something', function () {
    expect(!!orderservice).toBe(true);
  });

});
