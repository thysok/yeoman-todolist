'use strict';

/**
 * @ngdoc function
 * @name yeomanTodolistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTodolistApp
 */
angular.module('yeomanTodolistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
