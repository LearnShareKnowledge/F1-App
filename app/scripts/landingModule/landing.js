'use strict';

/**
 * Controller Name : LandingCtrl
 * Controller View : Landing View
 * Controller description : Controller used for displaying the landing view 
 * Controller Dependencies : backendDataServices , $scope 
 */
angular.module('myF1App.landingView', ['ngRoute','myF1App.commonServiceModule'])
.controller('LandingCtrl', ['$scope' , 'backendDataServices',
function($scope,backendDataServices) {
  $scope.hideMask = false ;
 
  /**
   * Method Name : getWorldChampion
   * Method Parameters : none
   * Method description : Method to getWorldChampion calls $http promise service 
   * for year 2005 till 2015 to get the world champion of each seasons 
   * and handles the response in a success callback . generates a list of all world 
   * champions for season 2005 to 2015
   */
  $scope.getWorldChampion = function(){
    //create year object
    var yearObj = [{year:'2005'},{year:'2006'},{year:'2007'},{year:'2008'},{year:'2009'},
                  {year:'2010'},{year:'2011'},{year:'2012'},{year:'2013'},
                  {year:'2014'},{year:'2015'}];
                      
    $scope.WinnerList = [];
    //loop through each year object to create a final list of all winners that will display on screen
    angular.forEach(yearObj,function(obj){
      var url = 'http://ergast.com/api/f1/'+ obj.year +'/driverStandings/1/drivers.json' ;
      backendDataServices.getBackendData(url)
      .then(function successCallBack(response){    
        obj.winner= response.MRData.DriverTable;
        $scope.WinnerList.push(obj.winner);
        if(obj.winner.season==2015){
          //when loop is on last season hide loading mask
          $scope.hideMask = true ;
        }
      }).catch(function(error){
        console.log(error);
      });
    });
  }
  
  //at controller init call the function to get list of world champions
  $scope.getWorldChampion();
   
}]);
