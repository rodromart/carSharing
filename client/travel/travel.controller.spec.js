'use strict';

describe('Controller: TravelCtrl', function () {

  // load the controller's module
  beforeEach(module('carsharingApp'));

  var TravelCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TravelCtrl = $controller('TravelCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
