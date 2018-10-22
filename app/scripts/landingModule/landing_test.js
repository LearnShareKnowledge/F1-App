'use strict';
/**
 * Test Name : myF1App.landingView module
 * Test description : unit test to describe landing view controller 
 */
describe('myF1App.landingView module', function() {

  beforeEach(module('myF1App.landingView'));

  describe('landingView controller', function(){

    var $scope, mockBackendService;
    //create mock data
    var mockData= {"MRData":{"xmlns":"http:\/\/ergast.com\/mrd\/1.4","series":"f1","url":"http://ergast.com/api/f1/2008/driverstandings/1/drivers.json","limit":"30","offset":"0","total":"1","DriverTable":{"season":"2008","driverStandings":"1","Drivers":[{"driverId":"hamilton","permanentNumber":"44","code":"HAM","url":"http:\/\/en.wikipedia.org\/wiki\/Lewis_Hamilton","givenName":"Lewis","familyName":"Hamilton","dateOfBirth":"1985-01-07","nationality":"British"}]}}};
    //inject depencies for test
    beforeEach(inject(function ($controller, $rootScope,backendDataServices) {
        $scope = $rootScope.$new();
        mockBackendService = backendDataServices;

        spyOn(mockBackendService, "getBackendData").and.returnValue(Promise.resolve(mockData));
        $controller("LandingCtrl", {$scope: $scope, backendDataServices: mockBackendService});
    }));
    
    //unit test should test if the backend service was called my the function getWorldChampion
    it("should call BackEnd Service", function () {
      var url = "http://ergast.com/api/f1/2008/driverStandings/1/drivers.json";
      $scope.getWorldChampion(url);
      expect(mockBackendService.getBackendData).toHaveBeenCalled();
    });

  });

  
});