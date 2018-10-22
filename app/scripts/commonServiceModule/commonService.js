'use strict';
/**
 * Service Name : backendDataServices
 * Service description : Common service to make $http call to get backend data
 * Service Dependencies : $http,$q 
 */
angular.module('myF1App.commonServiceModule', [])
.service('backendDataServices',['$http','$q',function($http,$q){
    var backendDataServices=this;
    /**
   * Method Name : getBackendData
   * Method Parameters : Url for which the data needs to be fetched
   * Method Description : getBackendData is a promise function that takes a url as 
   * a parameter and makes an http get call to get the data from API .
   * Method Returns : Returns a promise object 
   */
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