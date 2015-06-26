'use strict';

angular.module('ksAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ksDate',
  'ksString'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/common/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
