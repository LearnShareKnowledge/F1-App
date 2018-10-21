'use strict';

angular.module('myF1App.landingView', ['ngRoute','myF1App.commonServiceModule'])
.controller('LandingCtrl', ['$scope' , '$http' ,'backendDataServices',
function($scope,$http,backendDataServices) {
  $scope.hideMask = false ;

  /**
   * Method to getWorldChampion calls $http promise service 
   * for year 2005 till 2015 to get the world champion of each seasons 
   * and handles the response in a success callback
   */
  $scope.getWorldChampion = function(){
    var list = []; 
   
    for( var season=2005 ; season<=2015 ; season++) {
      //URL to get the world champion
      var url = 'http://ergast.com/api/f1/'+ season +'/driverStandings/1/drivers.json' ;
      backendDataServices.getBackendData(url)
      .then(function successCallBack(response){    
        list.push(response.MRData.DriverTable);
        if(list.length==11){
            $scope.WinnerList = list;
            //hiding the loading mask
            $scope.hideMask=true ;
        }
      }).catch(function(error){
        console.log(error);
      });
    }     
  }
  
  //at controller init call the function to get list of world champions
  $scope.getWorldChampion();

}])
