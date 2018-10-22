'use strict';

/**
 * Controller Name : ListCtrl
 * Controller View : List View
 * Controller description : Controller used for displaying the list view 
 * Controller Dependencies : backendDataServices , $scope ,$routeParams
 */
angular.module('myF1App.listView', ['ngRoute','myF1App.commonServiceModule'])
.controller('ListCtrl', ['$scope','$routeParams','backendDataServices',
function($scope,$routeParams,backendDataServices) {
  /* Getting the season and ID values from landing view where 
  * Season and ID were passed as url parameters when user clicks on season hyperlink
  */
  $scope.season= $routeParams.season;
  $scope.id = $routeParams.id;
  
  /**
   * Method Name : getWorldChampionList
   * Method Parameters : yearWon signifying the year for which data needs to be fetched
   * Method description : Method to getWorldChampionList calls $http promise service 
   * for year parameter and gets the winners of all races for a particular season.
   */
  $scope.getWorldChampionList = function(yearWon){ 
      var url = 'http://ergast.com/api/f1/'+yearWon+'/results/1.json' ;
      backendDataServices.getBackendData(url)
      .then(function(response){    
        $scope.winnerRaces = response.MRData.RaceTable ;
      }).catch(function(error){
        console.log(error);
      });
    }     
   
  
  $scope.getWorldChampionList($scope.season);
  
}]);