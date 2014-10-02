'use strict';

/**
 * @ngdoc function
 * @name yeomanTodolistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTodolistApp
 */
angular.module('yeomanTodolistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
