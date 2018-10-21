'use strict';

angular.module('myF1App.listView', ['ngRoute','myF1App.commonServiceModule'])
.controller('ListCtrl', ['$scope','$routeParams','backendDataServices',
function($scope,$routeParams,backendDataServices) {

  $scope.season= $routeParams.season;
  $scope.id = $routeParams.id;
  
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