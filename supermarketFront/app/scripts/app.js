'use strict';

/**
 * @ngdoc overview
 * @name supermarketFrontApp
 * @description
 * # supermarketFrontApp
 *
 * Main module of the application.
 */
angular
  .module('supermarketFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/orders', {
        templateUrl: 'views/orderview.html',
        controller: 'OrdercontrollerCtrl',
        controllerAs: 'orderController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
