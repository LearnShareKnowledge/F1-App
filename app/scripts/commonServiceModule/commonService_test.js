describe('backendDataServices test', function() {
    var $http;

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

   
    it('proxies through to $http.get', inject(function(backendDataServices){
        var url = "http://ergast.com/api/f1/2008/driverStandings/1/drivers.json";
        backendDataServices.getBackendData(url).then(function(res){
            console.log('success:'+res);
        });
        expect($http.get).toHaveBeenCalledWith(url);
    }));
});