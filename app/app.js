'use strict';
/**
 * Module Name : myF1App
 * Module description : myF1App is the main module and here
 * we declare app level module which depends on views, and components
 */
angular.module('myF1App', [
  'ngRoute',
  'myF1App.landingView',
  'myF1App.listView',
  'myF1App.version',
  'myF1App.commonServiceModule'
]).
//Route provider config for routing of the application 
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when('/landingView', {
    templateUrl: 'scripts/landingModule/landing.html',
    controller: 'LandingCtrl'
    
  })
  .when('/listView/:season/id/:id', {
    templateUrl: 'scripts/listModule/list.html',
    controller: 'ListCtrl'
  })
  .otherwise({redirectTo: '/landingView'});
}]);
