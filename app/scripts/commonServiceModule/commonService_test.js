/**
 * Test Name : backendDataServices test
 * Test description : unit test for backendDataServices 
 */

describe('backendDataServices test', function() {
    var $http;
    //inject dependencies for test
    beforeEach(module('myF1App.commonServiceModule', function($provide) {
        $provide.value('$http', $http = jasmine.createSpyObj('$http', ['get']));

        var httpPromise = {
            success: function(res) {
                res('success');
                return httpPromise;
            },
            error: function(error) {
                error('failure');
                return httpPromise;
            }
        };
        
        $http.get.and.returnValue(httpPromise);
    }));

    // test to check if service calls the $http.get method 
    it('proxies through to $http.get', inject(function(backendDataServices){
        var url = "http://ergast.com/api/f1/2008/driverStandings/1/drivers.json";
        backendDataServices.getBackendData(url).then(function(res){
            console.log('success:'+res);
        });
        expect($http.get).toHaveBeenCalledWith(url);
    }));
});