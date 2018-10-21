'use strict';

angular.module('myF1App.commonServiceModule', [])
.service('backendDataServices',['$http','$q',function($http,$q){
    var backendDataServices=this;
    
    backendDataServices.getBackendData= function(url){
        var deferred = $q.defer();
        $http.get(url)
        .success(function(data){
          deferred.resolve(data);
        }).error(function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    }
}]);