'use strict';

angular.module('ksAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/fund.json')
    .then(function(res) {
      $scope.funds = res.data;        
    });

  });